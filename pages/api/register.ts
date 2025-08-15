import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

interface Player {
  nickname: string;
  emailHash: string;
  code: string;
  language: string;
  createdAt: string;
  score: number;
}

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const rl = rateLimitMap.get(ip as string);
  if (rl && now - rl.timestamp < RATE_LIMIT_WINDOW) {
    if (rl.count >= RATE_LIMIT_MAX) {
      return res.status(429).json({ error: 'Too many requests' });
    }
    rl.count += 1;
  } else {
    rateLimitMap.set(ip as string, { count: 1, timestamp: now });
  }

  const { nickname, email, language } = req.body;
  if (typeof nickname !== 'string' || typeof email !== 'string' || typeof language !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const dbPath = path.join(process.cwd(), 'data', 'players.json');
  await fs.mkdir(path.dirname(dbPath), { recursive: true });
  let players: Record<string, Player> = {};
  try {
    players = JSON.parse(await fs.readFile(dbPath, 'utf8'));
  } catch {
    players = {};
  }

  const salt = process.env.HASH_SALT || 'default_salt';
  const emailHash = crypto.createHash('sha256').update(email + salt).digest('hex');

  for (const key of Object.keys(players)) {
    if (players[key].emailHash === emailHash) {
      return res.status(200).json({ code: players[key].code });
    }
  }

  const code = crypto.randomUUID();
  players[emailHash] = {
    nickname,
    emailHash,
    code,
    language,
    createdAt: new Date().toISOString(),
    score: 0,
  };

  await fs.writeFile(dbPath, JSON.stringify(players, null, 2));

  if (process.env.SMTP_HOST) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: 'New Player Joined',
        text: `A new player has joined the game! Nickname: ${nickname} Email: ${email}`,
      });
    } catch (e) {
      console.error('Email error', e);
    }
  }

  return res.status(200).json({ code });
}
