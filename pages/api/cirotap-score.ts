import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

type Entry = {
  name: string;
  score: number;
  createdAt: string;
};

const filePath = path.join(process.cwd(), 'data', 'cirotap-scores.json');

async function readEntries(): Promise<Entry[]> {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw) as Entry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeEntries(entries: Entry[]) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(entries, null, 2), 'utf8');
}

function sanitizeName(name: string) {
  const trimmed = name.trim().replace(/\s+/g, ' ');
  const cleaned = trimmed.replace(/[^a-zA-Z0-9а-яА-ЯёЁ\u00C0-\u024F\s._-]/g, '');
  return cleaned.substring(0, 15) || 'Guest';
}

function sanitizeScore(score: number) {
  return Math.max(0, Math.min(9999, Math.floor(score)));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const entries = await readEntries();
    const sorted = entries
      .filter((entry) => Number.isFinite(entry.score))
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(({ name, score }) => ({ name, score }));

    return res.status(200).json(sorted);
  }

  if (req.method === 'POST') {
    const { name, score } = req.body;

    if (typeof name !== 'string' || typeof score !== 'number' || Number.isNaN(score)) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const sanitizedName = sanitizeName(name);
    const sanitizedScore = sanitizeScore(score);

    const entries = await readEntries();
    entries.push({
      name: sanitizedName,
      score: sanitizedScore,
      createdAt: new Date().toISOString()
    });

    const compacted = entries
      .sort((a, b) => b.score - a.score)
      .slice(0, 100);

    await writeEntries(compacted);

    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
