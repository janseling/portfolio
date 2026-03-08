# GitHub Pages 部署方案

## 方案优势
- ✅ 完全免费
- ✅ 自动 HTTPS
- ✅ 自定义域名支持
- ✅ 版本控制集成

## 部署步骤

### 1. 创建 GitHub 仓库
访问 https://github.com/new
- 仓库名：`portfolio` 或 `你的用户名.github.io`
- 设置为：Public
- 不要初始化 README

### 2. 推送代码

```bash
cd ~/clawd/portfolio

# 添加远程仓库（替换成你的用户名）
git remote add origin https://github.com/你的用户名/portfolio.git
git branch -M main
git push -u origin main
```

### 3. 配置 GitHub Pages

#### 方式A：使用 GitHub Actions（推荐）

创建文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./out

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v1
```

#### 方式B：手动部署（快速测试）

```bash
# 1. 构建
cd ~/clawd/portfolio
npm run build

# 2. 推送 out 目录到 gh-pages 分支
git checkout -b gh-pages
git add out/ -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
git checkout main
```

### 4. 启用 GitHub Pages

1. 访问仓库 Settings → Pages
2. Source 选择：
   - 方式A：GitHub Actions
   - 方式B：Deploy from branch → gh-pages
3. 等待部署完成（约1-2分钟）

### 5. 访问网站

- **子域名**：`https://你的用户名.github.io/portfolio/`
- **自定义域名**（可选）：
  - 在 Pages 设置中添加自定义域名
  - 配置 DNS CNAME 记录

## 自动部署流程

```
推送代码 → GitHub Actions 自动构建 → 部署到 GitHub Pages → 网站更新
```

## 常见问题

**Q: 样式不加载？**
A: 检查 `basePath` 配置（如果仓库名不是用户名.github.io）

**Q: 404 错误？**
A: 确保 `out/404.html` 存在

**Q: 想用自定义域名？**
A: 在 `out/` 目录创建 `CNAME` 文件，内容为你的域名

## 推荐：自动化脚本

创建 `deploy.sh`：

```bash
#!/bin/bash
cd ~/clawd/portfolio
npm run build
gh-pages -d out
```

需要安装：`npm install -g gh-pages`
