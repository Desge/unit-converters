#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
# UnitConvert — One-click Vercel deployment script
# Usage: ./scripts/deploy.sh [--prod|--preview]
# ═══════════════════════════════════════════════════════════════
set -euo pipefail

# ──── Colors ────
RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; CYAN='\033[0;36m'; NC='\033[0m'

info()  { echo -e "${CYAN}[INFO]${NC}  $*"; }
ok()    { echo -e "${GREEN}[OK]${NC}    $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC}  $*"; }
fail()  { echo -e "${RED}[FAIL]${NC}  $*"; exit 1; }

# ──── Parse Args ────
MODE="preview"
if [[ "${1:-}" == "--prod" ]]; then
  MODE="prod"
elif [[ "${1:-}" == "--preview" ]]; then
  MODE="preview"
elif [[ -n "${1:-}" ]]; then
  echo "Usage: $0 [--prod|--preview]"
  echo "  --prod     Deploy to production"
  echo "  --preview  Deploy preview (default)"
  exit 1
fi

# ──── Pre-flight Checks ────
info "Running pre-flight checks..."

# Check vercel CLI
if ! command -v vercel &>/dev/null; then
  fail "Vercel CLI not found. Install: npm i -g vercel"
fi
ok "Vercel CLI found: $(vercel --version 2>/dev/null | head -1)"

# Check project dir
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
if [[ ! -f "$PROJECT_DIR/next.config.mjs" ]]; then
  fail "Not in project root. Expected next.config.mjs at $PROJECT_DIR"
fi
ok "Project directory: $PROJECT_DIR"

# Check Node
NODE_VER=$(node -v 2>/dev/null || echo "N/A")
ok "Node.js: $NODE_VER"

cd "$PROJECT_DIR"

# ──── Clean Previous Build ────
info "Cleaning previous build artifacts..."
rm -rf .next out
ok "Cleaned .next/ and out/"

# ──── Type Check ────
info "Running TypeScript type check..."
if npx tsc --noEmit 2>&1; then
  ok "TypeScript: zero errors"
else
  fail "TypeScript type check failed. Fix errors before deploying."
fi

# ──── Build ────
info "Building static export (this may take a few minutes)..."
if npx next build 2>&1; then
  ok "Build succeeded"
else
  fail "Build failed. Check errors above."
fi

# ──── Verify Output ────
HTML_COUNT=$(find out -name "*.html" 2>/dev/null | wc -l | tr -d ' ')
if [[ "$HTML_COUNT" -lt 100 ]]; then
  fail "Only $HTML_COUNT HTML pages generated — expected 4000+. Something is wrong."
fi
ok "Generated $HTML_COUNT HTML pages"

# ──── Deploy ────
if [[ "$MODE" == "prod" ]]; then
  info "Deploying to PRODUCTION..."
  # Use --archive=tgz for large static exports (avoids OOM / upload limit)
  DEPLOY_URL=$(vercel --prod --yes --archive=tgz 2>&1 | tail -1)
  ok "Production deployed: $DEPLOY_URL"
else
  info "Deploying PREVIEW..."
  DEPLOY_URL=$(vercel --yes --archive=tgz 2>&1 | tail -1)
  ok "Preview deployed: $DEPLOY_URL"
fi

# ──── Summary ────
echo ""
echo "══════════════════════════════════════════════"
echo -e "  ${GREEN}✅ Deployment Complete${NC}"
echo "══════════════════════════════════════════════"
echo "  Mode:       $MODE"
echo "  Pages:      $HTML_COUNT"
echo "  URL:        $DEPLOY_URL"
echo "  Dashboard:  https://vercel.com/dashboard"
echo "══════════════════════════════════════════════"
