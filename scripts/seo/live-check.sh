#!/usr/bin/env bash
set -euo pipefail

BASE="${1:-https://azumbo.vercel.app}"

check() {
  local path="$1"
  local expect="$2"
  local code
  code=$(curl -sI -o /dev/null -w "%{http_code}" "$BASE$path")
  if [[ "$code" != "$expect" ]]; then
    echo "FAIL $path expected $expect got $code"
    exit 1
  fi
  echo "OK   $path -> $code"
}

echo "Live SEO check against $BASE"
check "/" "307"
check "/en" "200"
check "/ru" "200"
check "/it" "200"
check "/en/" "308"
check "/en/answers" "200"
check "/lapasta" "200"
check "/ciromap" "200"
check "/stats" "404"
check "/register" "200"
check "/sitemap.xml" "200"
check "/robots.txt" "200"

echo "--- robots ---"
curl -s "$BASE/robots.txt" | head -40

echo "--- sitemap must NOT contain utility paths ---"
SITEMAP=$(curl -s "$BASE/sitemap.xml")
for bad in /register /stats /finish /game; do
  if echo "$SITEMAP" | grep -q "$bad"; then
    echo "FAIL sitemap contains $bad"
    exit 1
  fi
done
echo "OK   sitemap utility paths absent"

echo "--- homepage canonical ---"
curl -s "$BASE/en" | grep -o 'rel="canonical" href="[^"]*"' | head -1

echo "All checks passed."
