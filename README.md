# 分析思考方法论 - Docusaurus 站点

> 思维的质量决定人生的质量

一个高级、现代化的知识库网站,使用 Docusaurus 构建,展示系统化的思维方法论框架。

## ✨ 特性

- 🎨 **现代设计** - 简洁优雅的紫色主题,支持亮色/暗色模式
- 📱 **完全响应式** - 完美适配桌面、平板和移动设备
- 🚀 **性能优化** - 快速加载,流畅的用户体验
- 🔍 **强大搜索** - 内置全文搜索功能
- 📊 **丰富内容** - 支持 Markdown、Mermaid 图表、代码高亮
- 🎯 **自动化工具** - 一键导入和转换外部文档

## 📖 内容框架

### 9 大模块 · 42 个主题

1. **视角维度篇** - 多元视角、时间维度、系统层次、动态变化
2. **认知边界篇** - 认知限制、头脑开放、跳出思维循环、不确定性应对
3. **逻辑方法篇** - 因果分析、抽象具象、规则例外、成本收益
4. **问题解决篇** - 技术方法论、复杂系统、目标手段、具体分析
5. **心法修炼篇** - 课题分离、发散聚焦、细节全局、环境塑造
6. **博弈策略篇** - 博弈思维、价值交换、动机人性
7. **洞察发现篇** - 认知偏误、批判思维、信息线索、逆向思维、历史规律
8. **元认知篇** - 元认知觉察、情绪理性、概念定义、类比迁移、第一性原理
9. **商业实战篇** - 商业模式、定价变现、杠杆规模化、护城河竞争

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm start
```

访问 `http://localhost:3000` 查看网站。

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm serve
```

## 📥 导入文档

### 一键导入

```bash
./scripts/import-thinking-docs.sh
```

### 自定义导入

```bash
pnpm tsx scripts/convert-docs.ts <源目录> <目标目录>
```

**示例:**

```bash
pnpm tsx scripts/convert-docs.ts \
  "/Users/你的用户名/我的文档集合" \
  "./docs"
```

详细的导入流程请参考 [DOC_IMPORT_SOP.md](./DOC_IMPORT_SOP.md)。

## 🎨 自定义配置

### 主题颜色

编辑 `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #5b21b6;
  /* 修改其他颜色变量... */
}
```

### 站点配置

编辑 `docusaurus.config.ts`:

```typescript
const config: Config = {
  title: '你的站点名称',
  tagline: '你的标语',
  url: 'https://your-site.com',
  // 更多配置...
};
```

### 侧边栏

编辑 `sidebars.ts`:

```typescript
const sidebars: SidebarsConfig = {
  mainSidebar: [
    // 自定义侧边栏结构...
  ],
};
```

## 📁 项目结构

```
docusaurus-site4/
├── docs/                   # 文档内容
│   ├── 00-框架总览.md
│   ├── 01-视角维度篇/
│   ├── 02-认知边界篇/
│   └── ...
├── src/
│   ├── css/
│   │   └── custom.css      # 自定义样式
│   ├── components/         # React 组件
│   └── pages/
│       └── index.tsx       # 首页
├── static/
│   └── img/                # 静态资源
├── scripts/
│   ├── convert-docs.ts     # 文档转换脚本
│   └── import-thinking-docs.sh  # 一键导入脚本
├── docusaurus.config.ts    # Docusaurus 配置
├── sidebars.ts             # 侧边栏配置
├── package.json
└── README.md
```

## 🛠 技术栈

- **框架:** Docusaurus 3.x
- **语言:** TypeScript
- **包管理:** pnpm
- **样式:** CSS Modules + CSS Variables
- **图表:** Mermaid
- **部署:** Vercel / Netlify / GitHub Pages

## 📚 文档

- [导入文档 SOP](./DOC_IMPORT_SOP.md) - 完整的文档导入标准操作流程
- [Docusaurus 官方文档](https://docusaurus.io/)

## 🎯 主要特色

### 自动化文档转换

内置智能文档转换工具,自动处理:

- ✅ 提取文档元数据(标题、描述、标签)
- ✅ 生成 Docusaurus frontmatter
- ✅ 处理内部链接和图片
- ✅ 保持目录结构和排序
- ✅ 支持中文路径和文件名

### 精美的设计

- 🎨 现代化的渐变色主题(深蓝紫)
- 💫 流畅的动画和交互效果
- 📱 完美的移动端适配
- 🌓 优雅的亮色/暗色模式切换
- ✨ 卡片悬停效果和过渡动画

### 优秀的阅读体验

- 📖 清晰的排版和间距
- 🔤 优化的字体渲染
- 📊 美化的表格和代码块
- 💬 醒目的引用块样式
- 🎯 智能的目录导航

## 📈 性能优化

- ⚡ 静态站点生成(SSG)
- 🚀 代码分割和懒加载
- 📦 优化的资源打包
- 🖼️ 图片懒加载
- 💾 构建缓存

## 🌐 部署

### Vercel (推荐)

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

### GitHub Pages

```bash
GIT_USER=your-username pnpm deploy
```

### Netlify

推送到 Git 仓库,Netlify 会自动部署。

## 🤝 贡献

欢迎贡献!如果你有任何改进建议:

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📝 许可证

本项目采用 MIT 许可证。

## 💬 联系方式

如有问题或建议,欢迎:

- 提交 Issue
- 发起 Discussion
- 联系维护者

---

**构建于** Docusaurus 💚 **设计者** @lhqs

思维的质量决定人生的质量 ✨
