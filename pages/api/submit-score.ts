import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

interface Player {
  nickname: string;
  emailHash: string;
  code: string;
  language: string;
  createdAt: string;
  score?: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, score } = req.body;
  if (typeof code !== 'string' || typeof score !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const dbPath = path.join(process.cwd(), 'data', 'players.json');
  let players: Record<string, Player> = {};
  try {
    players = JSON.parse(await fs.readFile(dbPath, 'utf8'));
  } catch {
    return res.status(404).json({ error: 'Player database not found' });
  }

  const key = Object.keys(players).find((k) => players[k].code === code);
  if (!key) {
    return res.status(404).json({ error: 'Player not found' });
  }

  players[key].score = Math.max(players[key].score || 0, score);
  await fs.writeFile(dbPath, JSON.stringify(players, null, 2));
  return res.status(200).json({ success: true });
}
