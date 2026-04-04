# 故障排查指南

## 页面空白问题诊断

### 步骤 1: 检查浏览器控制台

1. 打开浏览器访问 `http://localhost:5176/`
2. 按 `F12` 打开开发者工具
3. 查看 **Console** 标签页

#### 常见错误及解决方案:

**错误 1: Module not found 或 Cannot find module**
```
解决方案: 检查所有导入路径是否正确
```

**错误 2: Uncaught SyntaxError**
```
解决方案: 检查 JSX 语法是否正确,括号是否匹配
```

**错误 3: GSAP is not defined**
```
解决方案: 重新安装 GSAP
npm install gsap
```

**错误 4: React Hook 相关错误**
```
可能是 Crosshair 组件的问题
临时禁用 Crosshair 测试
```

### 步骤 2: 检查网络标签

1. 在开发者工具中切换到 **Network** 标签
2. 刷新页面
3. 查看是否有失败的请求(红色标记)

### 步骤 3: 临时禁用 Crosshair

如果怀疑是 Crosshair 组件导致的问题:

#### Home.jsx
```jsx
// 注释掉这一行
// <Crosshair containerRef={containerRef} color="#FF3D00" />
```

对 About.jsx, Contact.jsx, Work.jsx 执行相同操作

### 步骤 4: 检查 Tailwind CSS

查看元素的样式是否正确应用:

1. 在开发者工具中选择 **Elements** 标签
2. 检查 `<body>` 元素
3. 查看 Computed 样式中的 background-color 是否为 `#0A0A0A`

如果 Tailwind 未生效,重启开发服务器:
```bash
# 停止当前服务器 (Ctrl+C)
npm run dev
```

### 步骤 5: 清除缓存

```bash
# 删除 node_modules/.vite 缓存
Remove-Item -Recurse -Force node_modules/.vite

# 重启服务器
npm run dev
```

### 步骤 6: 完全重置

```bash
# 停止服务器
# 删除 node_modules
Remove-Item -Recurse -Force node_modules

# 重新安装
npm install

# 启动
npm run dev
```

## 快速测试

### 测试 1: 最小化 Home 页面

临时替换 `src/pages/Home.jsx`:

```jsx
export default function Home() {
  return (
    <div style={{ color: 'white', padding: '50px' }}>
      <h1>TEST - If you see this, React is working</h1>
    </div>
  );
}
```

如果能看到文字,说明 React 正常工作,问题在于样式或组件。

### 测试 2: 检查路由

访问以下 URL 并查看是否有反应:
- `http://localhost:5176/`
- `http://localhost:5176/about`
- `http://localhost:5176/contact`
- `http://localhost:5176/work`

## 需要提供的信息

如果以上步骤无法解决,请提供:

1. **浏览器控制台的完整错误信息**(截图或复制文字)
2. **Network 标签中失败的请求**(如果有)
3. **浏览器版本**
4. **是否能看到页面的任何元素**(即使是空白也请说明)

## 已知问题

### Crosshair 组件的 React Hooks 警告

Crosshair 组件可能会触发 React Hooks 的 ESLint 警告,但通常不会导致页面崩溃。如果确实导致问题,可以暂时禁用此组件。

### 字体加载延迟

Google Fonts 可能需要几秒钟才能加载完成。如果看到文字但没有正确的字体样式,这是正常的,稍等片刻即可。
