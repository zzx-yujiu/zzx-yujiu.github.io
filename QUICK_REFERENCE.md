# 快速参考指南

## 🚀 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint
```

## 📂 关键文件位置

### 组件
- `src/components/Header.jsx` - 导航栏
- `src/components/Footer.jsx` - 页脚

### 页面
- `src/pages/Home.jsx` - 首页
- `src/pages/About.jsx` - 关于页
- `src/pages/Contact.jsx` - 联系页
- `src/pages/Work.jsx` - 作品页

### 配置
- `tailwind.config.js` - Tailwind 配置
- `src/router/index.jsx` - 路由配置
- `src/index.css` - 全局样式

## 🎨 设计系统速查

### 颜色类名
```jsx
bg-background       // #0A0A0A
text-foreground     // #FAFAFA
bg-muted            // #1A1A1A
text-mutedForeground // #737373
bg-accent           // #FF3D00
border-border       // #262626
```

### 字体类名
```jsx
font-headline       // Epilogue (标题)
font-body           // Newsreader (正文)
font-label          // Space Grotesk (标签)
```

### 常用组合
```jsx
// 大标题
className="text-6xl md:text-9xl font-headline font-black tracking-tighter"

// 次要文字
className="text-mutedForeground font-label text-xs uppercase tracking-widest"

// Accent 按钮
className="bg-accent text-foreground px-6 py-3 font-headline uppercase"

// 下划线链接
className="v-underline text-foreground hover:text-accent"

// Brutalist 输入框
className="brutalist-input w-full p-4"
```

## 📋 添加新页面步骤

1. 在 `src/pages/` 创建新组件
2. 在 `src/router/index.jsx` 添加路由
3. 在 `src/components/Header.jsx` 添加导航链接

示例:
```jsx
// 1. src/pages/NewPage.jsx
export default function NewPage() {
  return <main className="pt-32 px-6">内容</main>;
}

// 2. src/router/index.jsx
import NewPage from '../pages/NewPage';
// 在 children 数组中添加:
{ path: 'new', element: <NewPage /> }

// 3. src/components/Header.jsx
// 在导航链接中添加:
<Link to="/new">NEW</Link>
```

## 🔧 修改联系信息

编辑以下文件:
- `src/pages/Contact.jsx` - 联系方式链接
- `src/components/Footer.jsx` - 社交媒体链接

## 🎯 自定义内容

### 修改网站名称
全局搜索 "ZX" 并替换为您的名称:
- Header logo
- Footer brand
- 页面内容

### 修改强调色
在 `tailwind.config.js` 中:
```js
accent: "#FF3D00",  // 改为您喜欢的颜色
```

### 添加项目到作品页
编辑 `src/pages/Work.jsx` 中的 `projects` 数组。

## 📱 响应式断点

```css
默认      /* < 640px (mobile) */
sm:       /* ≥ 640px (tablet) */
md:       /* ≥ 768px (small desktop) */
lg:       /* ≥ 1024px (desktop) */
xl:       /* ≥ 1280px (large desktop) */
```

## ⚡ 性能提示

- 使用 `lazy()` 和 `Suspense` 进行代码分割
- 图片使用 WebP 格式
- 避免在 Tailwind 中使用任意值过多
- 生产构建前运行 `npm run build` 测试

## 🐛 常见问题

### 端口被占用
修改 `vite.config.js`:
```js
export default defineConfig({
  server: { port: 3000 }
})
```

### Tailwind 样式不生效
1. 检查 `tailwind.config.js` 的 `content` 路径
2. 重启开发服务器
3. 清除缓存: `rm -rf node_modules/.vite`

### 字体未加载
检查网络连接,Google Fonts 需要在线加载。

## 📚 有用资源

- [React Router 文档](https://reactrouter.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [Vite 文档](https://vite.dev/)
- [Bold Typography 设计系统](./stitch/radical_editorial/DESIGN.md)

---

更多详细信息,请查看 [INTEGRATION_COMPLETE.md](./INTEGRATION_COMPLETE.md)
