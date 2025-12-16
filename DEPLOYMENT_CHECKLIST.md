# 🚀 部署检查清单

## 部署前准备

### 1. 构建测试
```bash
# 清理旧的构建
rm -rf build

# 执行生产构建
pnpm build

# 本地预览构建结果
pnpm serve
```

### 2. 验证构建产物
检查 `build/` 目录包含以下文件:
- [ ] `index.html` (首页)
- [ ] `sitemap.xml` (站点地图)
- [ ] `robots.txt` (爬虫配置)
- [ ] `img/` 目录(包含 logo 和 favicon)
- [ ] 所有文档页面的 HTML

---

## 部署到服务器

### 域名和 DNS 配置
- **域名**: docs.thinking.ninthfeast.com
- **DNS 记录**: 确保 A 记录或 CNAME 记录正确指向服务器

### 上传构建文件
```bash
# 方式 1: 使用 rsync
rsync -avz --delete build/ user@server:/path/to/webroot/

# 方式 2: 使用 scp
scp -r build/* user@server:/path/to/webroot/

# 方式 3: 使用 Git + CI/CD (推荐)
git push origin main
# 触发自动部署流程
```

### Nginx 配置示例
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name docs.thinking.ninthfeast.com;

    # 重定向到 HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name docs.thinking.ninthfeast.com;

    # SSL 证书
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # 网站根目录
    root /path/to/webroot;
    index index.html;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript
               application/x-javascript application/xml+rss
               application/javascript application/json;

    # 缓存策略
    location ~* \.(jpg|jpeg|png|gif|ico|svg|css|js|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA 路由
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

---

## 部署后验证

### A. 基础功能测试
- [ ] 访问首页: https://docs.thinking.ninthfeast.com
- [ ] 测试所有导航链接
- [ ] 测试 9 个模块卡片链接
- [ ] 测试文档内的内部链接
- [ ] 测试搜索功能 (如果启用)
- [ ] 测试明/暗主题切换
- [ ] 测试移动端响应式

### B. SEO 文件验证
```bash
# 测试 robots.txt
curl https://docs.thinking.ninthfeast.com/robots.txt

# 测试 sitemap.xml
curl https://docs.thinking.ninthfeast.com/sitemap.xml

# 测试社交卡片图片
curl -I https://docs.thinking.ninthfeast.com/img/social-card.svg
```

### C. 性能测试
使用以下工具测试性能:
- [ ] Google PageSpeed Insights: https://pagespeed.web.dev/
- [ ] GTmetrix: https://gtmetrix.com/
- [ ] WebPageTest: https://www.webpagetest.org/

**目标指标**:
- Performance Score: > 90
- Accessibility Score: > 95
- Best Practices Score: > 95
- SEO Score: > 95

### D. 结构化数据验证
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Schema.org Validator: https://validator.schema.org/

### E. 社交分享测试
- [ ] Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

---

## 搜索引擎提交

### Google Search Console
1. 访问: https://search.google.com/search-console
2. 添加资源: `https://docs.thinking.ninthfeast.com`
3. 验证所有权(建议使用 HTML 标签方法)
4. 提交 sitemap: `https://docs.thinking.ninthfeast.com/sitemap.xml`
5. 请求索引首页和重要页面

### 百度搜索资源平台
1. 访问: https://ziyuan.baidu.com/
2. 添加网站: `https://docs.thinking.ninthfeast.com`
3. 验证站点
4. 提交 sitemap
5. 使用"普通收录"功能提交 URL

### Bing Webmaster Tools
1. 访问: https://www.bing.com/webmasters
2. 添加站点并验证
3. 提交 sitemap

---

## 监控和分析

### Google Analytics 4 (可选)
如需添加 GA4:
1. 创建 GA4 资源
2. 获取 Measurement ID (G-XXXXXXXXXX)
3. 在 `docusaurus.config.ts` 添加:
```typescript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
}
```

### 其他监控工具
- [ ] UptimeRobot: 监控网站可用性
- [ ] Cloudflare: CDN 和安全防护
- [ ] Sentry: 错误监控 (可选)

---

## 安全检查

### SSL/TLS 证书
- [ ] 证书有效期 > 30 天
- [ ] 强制 HTTPS 重定向
- [ ] HSTS 头配置

### 安全头检查
使用 https://securityheaders.com/ 检测:
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] X-XSS-Protection
- [ ] Referrer-Policy
- [ ] Content-Security-Policy (可选)

---

## 备份策略

### 源代码备份
- [x] GitHub 仓库: https://github.com/lhqs1314/thinking-docs
- [ ] 定期推送到远程仓库
- [ ] 创建版本标签 (git tag)

### 构建文件备份
```bash
# 备份构建目录
tar -czf backup-$(date +%Y%m%d).tar.gz build/

# 上传到备份服务器或云存储
```

---

## 更新流程

### 内容更新
1. 修改 markdown 文档
2. 本地预览: `pnpm start`
3. 提交到 Git: `git commit -am "更新内容"`
4. 推送: `git push`
5. 重新构建和部署

### 依赖更新
```bash
# 检查过期依赖
pnpm outdated

# 更新依赖
pnpm update

# 测试构建
pnpm build
```

---

## 故障排除

### 常见问题

**问题 1: 404 错误**
- 检查 Nginx 配置的 `try_files` 指令
- 确保所有文件权限正确
- 检查文件路径大小写

**问题 2: 样式丢失**
- 检查 `baseUrl` 配置
- 清除浏览器缓存
- 检查 CDN 缓存

**问题 3: 搜索功能不工作**
- 确认 Algolia 配置正确
- 检查 API Key 权限

---

## 联系信息

**作者**: lhqs
**邮箱**: lhqs1314@gmail.com
**GitHub**: https://github.com/lhqs1314

---

## 部署日志

| 日期 | 版本 | 变更说明 | 部署人 |
|------|------|----------|--------|
| 2024-12-16 | v1.0.0 | 初始部署,包含完整 SEO 优化 | lhqs |
|  |  |  |  |

---

*最后更新: 2024-12-16*
