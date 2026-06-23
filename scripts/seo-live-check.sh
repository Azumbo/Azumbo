#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${1:-https://azumbo.vercel.app}"

urls=("/" "/en" "/ru" "/it" "/sitemap.xml" "/robots.txt")

for p in "${urls[@]}"; do
  echo "===== $BASE_URL$p ====="
  curl -sS -I -L "$BASE_URL$p" | awk 'BEGIN{IGNORECASE=1} /HTTP\/|location:|content-type:|x-robots-tag:|link:|cache-control:/'
  echo
 done

echo "===== video indexing: no VideoObject on locale homepages ====="
for loc in en ru it; do
  html="$(curl -sS -L "$BASE_URL/$loc")"
  if echo "$html" | grep -q '"@type":"VideoObject"'; then
    echo "FAIL: VideoObject found on /$loc"
    exit 1
  fi
  echo "OK: /$loc has no VideoObject JSON-LD"
done
