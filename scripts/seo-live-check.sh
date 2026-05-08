#!/usr/bin/env bash
set -euo pipefail
BASE_URL="${1:-https://azumbo.vercel.app}"

urls=("/" "/en" "/ru" "/it" "/sitemap.xml" "/robots.txt")

for p in "${urls[@]}"; do
  echo "===== $BASE_URL$p ====="
  curl -sS -I -L "$BASE_URL$p" | awk 'BEGIN{IGNORECASE=1} /HTTP\/|location:|content-type:|x-robots-tag:|link:|cache-control:/'
  echo
 done
