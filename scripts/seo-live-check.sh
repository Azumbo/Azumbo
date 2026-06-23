#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${1:-https://azumbo.vercel.app}"

urls=("/" "/en" "/ru" "/it" "/sitemap.xml" "/robots.txt")

for p in "${urls[@]}"; do
  echo "===== $BASE_URL$p ====="
  curl -sS -I -L "$BASE_URL$p" | awk 'BEGIN{IGNORECASE=1} /HTTP\/|location:|content-type:|x-robots-tag:|link:|cache-control:/'
  echo
 done

echo "===== robots AI bot policy ====="
robots="$(curl -sS "$BASE_URL/robots.txt")"
echo "$robots" | grep -q 'GPTBot' && echo "OK: GPTBot listed" || { echo "FAIL: GPTBot missing"; exit 1; }
echo "$robots" | grep -q 'Disallow' && { echo "FAIL: robots contains Disallow rules"; exit 1; } || echo "OK: no Disallow rules"

echo "===== hreflang en-US on /en ====="
html="$(curl -sS -L "$BASE_URL/en")"
echo "$html" | grep -q 'hrefLang="en-US"' && echo "OK: en-US hreflang present" || { echo "FAIL: en-US hreflang missing"; exit 1; }
for loc in en ru it; do
  html="$(curl -sS -L "$BASE_URL/$loc")"
  if echo "$html" | grep -q '"@type":"VideoObject"'; then
    echo "FAIL: VideoObject found on /$loc"
    exit 1
  fi
  echo "OK: /$loc has no VideoObject JSON-LD"
done
