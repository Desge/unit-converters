#!/bin/bash
# ================================================================
# UnitConvert — 一键启停脚本
# 用法:
#   ./dev.sh start      启动开发服务器 (localhost:3000)
#   ./dev.sh build      生产构建 (静态导出)
#   ./dev.sh preview    预览生产构建 (localhost:8080)
#   ./dev.sh stop       停止开发服务器
#   ./dev.sh status     查看运行状态
# ================================================================
set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$PROJECT_DIR/.dev.pid"
PORT=3000

cd "$PROJECT_DIR"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# ── PID lookup ──
get_pid() {
  if [ -f "$PID_FILE" ]; then
    local pid; pid=$(cat "$PID_FILE")
    if kill -0 "$pid" 2>/dev/null; then
      echo "$pid"
      return
    fi
  fi
  lsof -ti :$PORT 2>/dev/null || true
}

# ── start ──
start() {
  local pid; pid=$(get_pid)
  if [ -n "$pid" ]; then
    echo -e "${YELLOW}⚠️  开发服务器已在运行 (PID: $pid, Port: $PORT)${NC}"
    echo -e "    访问: ${CYAN}http://localhost:$PORT${NC}"
    return 0
  fi

  echo -e "${GREEN}▶  启动 UnitConvert 开发服务器...${NC}"
  npx next dev -p $PORT &
  local new_pid=$!
  echo "$new_pid" > "$PID_FILE"

  echo -n "    等待就绪"
  for i in $(seq 1 30); do
    if curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/en/" 2>/dev/null | grep -q '200\|302\|304'; then
      echo -e "\n${GREEN}✅ 服务器就绪！${NC}"
      echo -e "    PID: ${CYAN}$new_pid${NC}  |  Port: ${CYAN}$PORT${NC}"
      echo -e "    地址: ${CYAN}http://localhost:$PORT/en/${NC}"
      return 0
    fi
    echo -n "."
    sleep 1
  done
  echo -e "\n${YELLOW}⚠️  进程已启动，等待首次编译...${NC}"
}

# ── stop ──
stop() {
  local pid; pid=$(get_pid)
  if [ -z "$pid" ]; then
    echo -e "${YELLOW}⚠️  无运行中的服务器${NC}"
    rm -f "$PID_FILE"
    return 0
  fi
  echo -e "${RED}⏹  停止服务器 (PID: $pid)...${NC}"
  kill "$pid" 2>/dev/null || true
  sleep 1
  kill -9 "$pid" 2>/dev/null || true
  rm -f "$PID_FILE"
  echo -e "${GREEN}✅ 已停止${NC}"
}

# ── build ──
build() {
  echo -e "${GREEN}🔨 生产构建 (静态导出)...${NC}"
  npx next build
  local html_count; html_count=$(find out -name "*.html" 2>/dev/null | wc -l | tr -d ' ')
  echo ""
  echo -e "${GREEN}✅ 构建完成${NC}"
  echo -e "    静态页面: ${CYAN}${html_count}${NC} 个"
  echo -e "    输出目录: ${CYAN}out/${NC}"
  echo -e "    预览命令: ${CYAN}./dev.sh preview${NC}"
}

# ── preview ──
preview() {
  if [ ! -d "out" ]; then
    echo -e "${RED}❌ 尚未构建，请先运行: ./dev.sh build${NC}"
    exit 1
  fi
  echo -e "${GREEN}▶  预览生产构建...${NC}"
  local preview_port=8080
  if lsof -ti :$preview_port >/dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  端口 $preview_port 已占用${NC}"
  fi
  echo -e "    地址: ${CYAN}http://localhost:$preview_port/en/${NC}"
  npx serve out -p $preview_port
}

# ── status ──
status() {
  local pid; pid=$(get_pid)
  if [ -z "$pid" ]; then
    echo -e "${YELLOW}状态: ${RED}未运行${NC}"
    return 1
  fi
  local code; code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/en/" 2>/dev/null || echo "000")
  echo -e "${GREEN}状态: 运行中${NC} (PID: $pid, Port: $PORT, HTTP: $code)"
}

# ── main ──
case "${1:-start}" in
  start)    start ;;
  stop)     stop ;;
  restart)  stop && sleep 1 && start ;;
  build)    build ;;
  preview)  preview ;;
  status)   status ;;
  *)
    echo "用法: $0 {start|stop|restart|build|preview|status}"
    echo ""
    echo "  start     启动开发服务器 (localhost:3000)"
    echo "  stop      停止开发服务器"
    echo "  restart   重启开发服务器"
    echo "  build     生产构建 → out/"
    echo "  preview   预览生产构建 (localhost:8080)"
    echo "  status    查看运行状态"
    exit 1
    ;;
esac
