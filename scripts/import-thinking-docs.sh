#!/bin/bash

# 一键导入"分析思考方法论"文档到 Docusaurus

set -e

# 颜色定义
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}======================================${NC}"
echo -e "${BLUE}   思考方法论文档导入工具 v1.0       ${NC}"
echo -e "${BLUE}======================================${NC}"
echo ""

# 配置
SOURCE_DIR="/Users/lhqs/devloper/workspace/lhqs-msic/site-list/分析思考方法论"
TARGET_DIR="./docs"

# 检查源目录
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ 错误: 源目录不存在: $SOURCE_DIR"
  exit 1
fi

# 清理旧文档(可选)
echo "🧹 清理旧文档..."
rm -rf "$TARGET_DIR"
mkdir -p "$TARGET_DIR"

# 执行转换
echo ""
echo -e "${GREEN}🚀 开始转换文档...${NC}"
pnpm tsx scripts/convert-docs.ts "$SOURCE_DIR" "$TARGET_DIR"

echo ""
echo -e "${GREEN}✅ 文档导入完成!${NC}"
echo ""
echo "📝 后续步骤:"
echo "  1. 运行 'pnpm start' 预览网站"
echo "  2. 运行 'pnpm build' 构建生产版本"
echo ""
