# 🚀 快速开始指南

一分钟启动你的知识库网站!

## 📦 安装

```bash
cd docusaurus-site4
pnpm install
```

## 🎬 启动

```bash
pnpm start
```

自动打开浏览器访问 `http://localhost:3000`

## 📥 导入新文档

### 方式1: 一键导入(推荐)

```bash
pnpm import-docs
```

### 方式2: 自定义路径

```bash
pnpm tsx scripts/convert-docs.ts "/your/docs/path" "./docs"
```

## 🏗️ 构建生产版本

```bash
pnpm build
pnpm serve
```

## 🌐 部署

### Vercel (最简单)

```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages

```bash
GIT_USER=your-username pnpm deploy
```

## 🎨 自定义

### 修改主题颜色

编辑 `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #your-color;
}
```

### 修改站点信息

编辑 `docusaurus.config.ts`:

```typescript
title: '你的站点名称',
tagline: '你的标语',
url: 'https://your-site.com',
```

## 📚 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm start` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm serve` | 预览生产版本 |
| `pnpm import-docs` | 导入文档 |
| `pnpm clear` | 清理缓存 |

## 🆘 遇到问题?

1. 查看 [DOC_IMPORT_SOP.md](./DOC_IMPORT_SOP.md) 获取详细指南
2. 查看 [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) 了解项目全貌
3. 提交 Issue 获取帮助

## ✨ 特性

- ✅ 自动化文档转换
- ✅ 高级主题设计
- ✅ 完全响应式
- ✅ 亮/暗模式
- ✅ Mermaid 图表
- ✅ 代码高亮

---

开始探索吧! 🎉
