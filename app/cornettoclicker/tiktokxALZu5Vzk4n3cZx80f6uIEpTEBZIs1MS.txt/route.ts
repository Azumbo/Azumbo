import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return new NextResponse(
    "tiktok-developers-site-verification=xALZu5Vzk4n3cZx80f6uIEpTEBZIs1MS",
    {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=31536000, immutable",
      },
    }
  );
}
