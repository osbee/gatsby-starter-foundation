#!/usr/bin/env bash
set -e
cd "$(dirname "$0")/.."
GATSBY_PID=""
if ! curl -s -o /dev/null -m 3 "http://localhost:8001/"; then
  echo "[dev-preview] starting gatsby develop on :8001"
  npm run develop -- -p 8001 -H 0.0.0.0 > /tmp/gatsby-dev.log 2>&1 &
  GATSBY_PID=$!
else
  echo "[dev-preview] gatsby already running on :8001"
fi
cleanup() {
  if [ -n "$GATSBY_PID" ]; then
    kill "$GATSBY_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

for i in $(seq 1 120); do
  if curl -s -o /dev/null -m 3 "http://localhost:8001/"; then
    echo "[dev-preview] gatsby ready on :8001"
    if [ -n "$GATSBY_PID" ]; then
      wait "$GATSBY_PID"
      exit 0
    fi
    while true; do
      sleep 3600
    done
  fi
  sleep 10
done
echo "[dev-preview] gatsby develop did not open :8001 in time" >&2
exit 1