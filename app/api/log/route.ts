import { NextRequest, NextResponse } from 'next/server';
import { appendFile, mkdir } from 'fs/promises';
import { join } from 'path';

const logDir = join(process.cwd(), 'logs');
const logFile = join(logDir, 'game.log');

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    await mkdir(logDir, { recursive: true });
    await appendFile(logFile, body + '\n');
    return NextResponse.json({ status: 'ok' });
  } catch (e) {
    console.error('Log error', e);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
