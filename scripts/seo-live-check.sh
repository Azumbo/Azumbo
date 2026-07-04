#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${1:-https://azumbo.vercel.app}"

urls=("/" "/en" "/ru" "/it" "/en/" "/sitemap.xml" "/robots.txt")

for p in "${urls[@]}"; do
  echo "===== $BASE_URL$p ====="
  curl -sS -I -L "$BASE_URL$p" | awk 'BEGIN{IGNORECASE=1} /HTTP\/|location:|content-type:|x-robots-tag:|link:|cache-control:/'
  echo
done

echo "===== robots AI bot policy ====="
robots="$(curl -sS "$BASE_URL/robots.txt")"
for bot in GPTBot OAI-SearchBot Googlebot Google-Extended; do
  echo "$robots" | grep -q "$bot" && echo "OK: $bot listed" || { echo "FAIL: $bot missing"; exit 1; }
done
echo "$robots" | grep -q 'Disallow' && { echo "FAIL: robots contains Disallow rules"; exit 1; } || echo "OK: no Disallow rules"

echo "===== hreflang en-US on /en ====="
html="$(curl -sS -L "$BASE_URL/en")"
echo "$html" | grep -q 'hrefLang="en-US"' && echo "OK: en-US hreflang present" || { echo "FAIL: en-US hreflang missing"; exit 1; }
echo "$html" | grep -q 'rel="canonical" href="https://azumbo.vercel.app/en"' && echo "OK: self-canonical /en" || { echo "FAIL: canonical /en missing"; exit 1; }

for loc in en ru it; do
  html="$(curl -sS -L "$BASE_URL/$loc")"
  if echo "$html" | grep -q '"@type":"VideoObject"'; then
    echo "FAIL: VideoObject found on /$loc homepage"
    exit 1
  fi
  if echo "$html" | grep -qi '<video'; then
    echo "FAIL: <video> tag found on homepage /$loc"
    exit 1
  fi
  echo "OK: /$loc homepage has no VideoObject or embedded video"
done

echo "===== Bird Lines watch page (Google video indexing) ====="
for loc in en ru it; do
  watch_html="$(curl -sS -L "$BASE_URL/$loc/videos/bird-lines")"
  echo "$watch_html" | grep -q 'id="bird-lines-player"' && echo "OK: /$loc watch anchor present" || { echo "FAIL: bird-lines-player missing on /$loc"; exit 1; }
  echo "$watch_html" | grep -q '"@type":"VideoObject"' && echo "OK: VideoObject on /$loc watch page" || { echo "FAIL: VideoObject missing on /$loc"; exit 1; }
  echo "$watch_html" | grep -qi '<video' && echo "OK: /$loc watch page has video element" || { echo "FAIL: video missing on /$loc"; exit 1; }
done

echo "===== video file accessibility ====="
curl -sS -I "$BASE_URL/WhoopsBirdLines.mp4" | awk 'BEGIN{IGNORECASE=1} /HTTP\/|content-type:|accept-ranges:/'
echo "OK: video file reachable"

echo "===== sitemap hygiene ====="
sitemap="$(curl -sS "$BASE_URL/sitemap.xml")"
echo "$sitemap" | grep -c '<loc>https://azumbo.vercel.app/en</loc>' | grep -q '^1$' && echo "OK: /en listed once" || { echo "FAIL: /en duplicate or missing in sitemap"; exit 1; }
echo "$sitemap" | grep -q '/videos/bird-lines' && echo "OK: watch pages in sitemap" || { echo "FAIL: watch pages missing from sitemap"; exit 1; }
echo "$sitemap" | grep -q 'cityintheplane/privacy' && { echo "FAIL: broken cityintheplane/privacy still in sitemap"; exit 1; } || echo "OK: no broken cityintheplane privacy URL"

echo
echo "All live SEO checks passed for $BASE_URL"
