import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

interface Player {
  nickname: string;
  score?: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const dbPath = path.join(process.cwd(), 'data', 'players.json');
  let players: Record<string, Player> = {};
  try {
    players = JSON.parse(await fs.readFile(dbPath, 'utf8'));
  } catch {
    return res.status(200).json([]);
  }

  const list = Object.values(players)
    .map((p) => ({ nickname: p.nickname, score: p.score || 0 }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return res.status(200).json(list);
}
