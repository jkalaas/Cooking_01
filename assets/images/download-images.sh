#!/usr/bin/env bash
# download-images.sh
# Downloads high-resolution recipe photos from Unsplash and saves them to
# assets/images/. Run this script once from the project root:
#
#   bash assets/images/download-images.sh
#
# After running, the site will serve local images instead of fetching from CDN.

set -e
DIR="$(cd "$(dirname "$0")" && pwd)"

download() {
  local name="$1"
  local url="$2"
  echo "Downloading $name..."
  curl -sL --max-time 30 -o "$DIR/$name" "$url"
  echo "  -> $DIR/$name ($(wc -c < "$DIR/$name") bytes)"
}

download "hero-background.jpg" \
  "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1920&q=85"

download "lobster-thermidor.jpg" \
  "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=1200&q=85"

download "seared-scallops.jpg" \
  "https://images.unsplash.com/photo-1611599538835-b52a8c2f9080?auto=format&fit=crop&w=1200&q=85"

download "oysters-rockefeller.jpg" \
  "https://images.unsplash.com/photo-1617196034183-421b4040ed20?auto=format&fit=crop&w=1200&q=85"

download "sea-urchin-linguine.jpg" \
  "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=85"

download "bouillabaisse.jpg" \
  "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"

download "turbot-beurre-blanc.jpg" \
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"

download "chef-bobba.jpg" \
  "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85"

echo ""
echo "All images downloaded to $DIR"
echo "The site will now use local images automatically."
