# 快速启动指南

## 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

## 安装步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产版本 |
| `npm run lint` | 运行代码检查 |

## 推荐的后续安装

### 1. 安装路由

```bash
npm install react-router-dom
```

### 2. 安装 HTTP 客户端

```bash
npm install axios
```

### 3. 安装状态管理 (可选)

```bash
# Zustand (推荐,轻量级)
npm install zustand

# 或 Redux Toolkit
npm install @reduxjs/toolkit react-redux
```

### 4. 安装 UI 组件库 (可选)

```bash
# Material-UI
npm install @mui/material @emotion/react @emotion/styled

# 或 Ant Design
npm install antd

# 或 Chakra UI
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

### 5. 安装 CSS 工具 (可选)

```bash
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 6. 安装开发工具 (可选)

```bash
# Prettier (代码格式化)
npm install -D prettier

# 单元测试
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

## 项目结构

```
personal_web1/
├── src/
│   ├── components/    # 可重用组件
│   ├── pages/         # 页面组件
│   ├── layouts/       # 布局组件
│   ├── hooks/         # 自定义 Hooks
│   ├── utils/         # 工具函数
│   ├── services/      # API 服务
│   ├── context/       # 全局状态
│   ├── assets/        # 静态资源
│   ├── styles/        # 全局样式
│   └── router/        # 路由配置
├── public/            # 公共资源
└── ...
```

## 开发建议

1. **组件开发**: 优先开发可复用的组件
2. **路径别名**: 使用 `@components`, `@pages` 等别名导入
3. **代码规范**: 运行 `npm run lint` 检查代码
4. **环境变量**: 复制 `.env.example` 为 `.env` 并配置

## 常见问题

### Q: 如何更改开发服务器端口?

A: 在 `vite.config.js` 中添加:

```javascript
export default defineConfig({
  server: {
    port: 3000
  }
})
```

### Q: 如何配置代理?

A: 在 `vite.config.js` 中添加:

```javascript
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
})
```

### Q: 如何优化构建大小?

A: 可以:
- 使用动态导入 (Code Splitting)
- 移除未使用的依赖
- 使用生产模式构建
- 启用 gzip 压缩

## 更多信息

- [Vite 文档](https://vite.dev/)
- [React 文档](https://react.dev/)
- [项目结构说明](./STRUCTURE.md)

## 支持

如有问题,请查看项目文档或提交 Issue。
