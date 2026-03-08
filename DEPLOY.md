# 部署说明

## 方案1：使用 Vercel CLI（推荐）

```bash
# 1. 登录 Vercel
cd ~/clawd/portfolio
npx vercel login

# 2. 部署到生产环境
npx vercel --prod

# 3. 获取 URL
# 部署成功后会显示在线地址
```

## 方案2：GitHub + Vercel（自动部署）

### 步骤1：推送到 GitHub
```bash
cd ~/clawd/portfolio
git remote add origin https://github.com/你的用户名/portfolio.git
git branch -M main
git push -u origin main
```

### 步骤2：在 Vercel 导入
1. 访问 https://vercel.com
2. 点击 "Import Project"
3. 选择 GitHub 仓库
4. 点击 "Deploy"
5. 等待部署完成（约2-3分钟）

### 步骤3：获取 URL
- 部署成功后会获得 `你的项目名.vercel.app` 地址
- 可以在 Vercel 控制台绑定自定义域名

## 部署后配置

### 更新联系方式
修改 `app/contact/page.tsx` 中的：
- Telegram 用户名
- Email 地址
- GitHub 链接
- LinkedIn 链接

### 更新 metadata
修改 `app/layout.tsx` 中的：
- title
- description
- keywords

### 重新部署
```bash
git add .
git commit -m "update contact info"
npx vercel --prod
```

## 常见问题

**Q: 构建失败？**
A: 检查 Node.js 版本（需要 18+）

**Q: 样式不加载？**
A: 确保 `next.config.js` 中有 `output: 'export'`

**Q: 想绑定自定义域名？**
A: 在 Vercel 控制台 -> Settings -> Domains 添加

## 项目信息

- **路径**: ~/clawd/portfolio/
- **技术**: Next.js 14 + TypeScript
- **部署**: Vercel
- **状态**: 生产就绪 ✅
