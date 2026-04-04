# 项目总览

## 项目信息

- **项目名称**: Personal Web 1
- **项目类型**: React 单页应用 (SPA)
- **构建工具**: Vite 8.0.1
- **框架版本**: React 19.2.4
- **包管理器**: npm
- **开发端口**: http://localhost:5173

## 框架状态

✅ **基础框架已搭建完成**

### 已完成

- [x] Vite + React 项目初始化
- [x] 标准目录结构创建
- [x] 路径别名配置
- [x] 开发环境配置
- [x] 代码规范工具 (ESLint)
- [x] 占位文件和 README 说明
- [x] Git 忽略文件配置
- [x] 项目文档编写

### 目录结构

```
personal_web1/
├── node_modules/           ✅ 依赖已安装
├── public/                 ✅ 公共资源目录
├── src/
│   ├── assets/            ✅ 静态资源
│   │   ├── images/        ✅ 图片目录
│   │   └── icons/         ✅ 图标目录
│   ├── components/        ✅ 组件目录
│   │   ├── Header.jsx     ⏳ 待实现
│   │   └── Footer.jsx     ⏳ 待实现
│   ├── pages/             ✅ 页面目录
│   │   ├── Home.jsx       ⏳ 待实现
│   │   └── About.jsx      ⏳ 待实现
│   ├── layouts/           ✅ 布局目录
│   │   └── MainLayout.jsx ⏳ 待实现
│   ├── hooks/             ✅ 自定义 Hooks 目录
│   ├── utils/             ✅ 工具函数目录
│   │   └── constants.js   ⏳ 待填充
│   ├── services/          ✅ API 服务目录
│   │   └── api.js         ⏳ 待实现
│   ├── context/           ✅ 全局状态目录
│   ├── styles/            ✅ 全局样式目录
│   │   └── global.css     ⏳ 待填充
│   ├── router/            ✅ 路由配置目录
│   │   └── index.jsx      ⏳ 待实现
│   ├── App.jsx            ✅ 根组件
│   ├── App.css            ✅ 根组件样式
│   ├── main.jsx           ✅ 入口文件
│   └── index.css          ✅ 入口样式
├── .env.example           ✅ 环境变量示例
├── .gitignore             ✅ Git 配置
├── eslint.config.js       ✅ ESLint 配置
├── jsconfig.json          ✅ JS 配置 (路径别名)
├── package.json           ✅ 项目配置
├── vite.config.js         ✅ Vite 配置 (含路径别名)
├── README.md              ✅ 项目说明
├── STRUCTURE.md           ✅ 结构说明
├── QUICKSTART.md          ✅ 快速启动指南
└── PROJECT_OVERVIEW.md    ✅ 项目总览 (本文档)
```

## 技术栈

### 核心依赖
- **react**: ^19.2.4 - UI 框架
- **react-dom**: ^19.2.4 - React DOM 渲染

### 开发依赖
- **vite**: ^8.0.1 - 构建工具
- **@vitejs/plugin-react**: ^6.0.1 - React 插件
- **eslint**: ^9.39.4 - 代码检查
- **@types/react**: ^19.2.14 - React 类型定义
- **@types/react-dom**: ^19.2.3 - React DOM 类型定义

## 配置说明

### 路径别名

项目已配置完整的路径别名系统:

| 别名 | 路径 | 用途 |
|------|------|------|
| `@` | `./src` | 根目录 |
| `@components` | `./src/components` | 组件 |
| `@pages` | `./src/pages` | 页面 |
| `@layouts` | `./src/layouts` | 布局 |
| `@hooks` | `./src/hooks` | Hooks |
| `@utils` | `./src/utils` | 工具 |
| `@services` | `./src/services` | 服务 |
| `@context` | `./src/context` | 状态 |
| `@assets` | `./src/assets` | 资源 |
| `@styles` | `./src/styles` | 样式 |

### 环境变量

环境变量以 `VITE_` 开头,在 `.env.example` 中查看示例。

## 下一步开发建议

### 必要的扩展

1. **路由管理**
   ```bash
   npm install react-router-dom
   ```
   - 实现 `/src/router/index.jsx` 路由配置
   - 配置页面路由

2. **HTTP 客户端**
   ```bash
   npm install axios
   ```
   - 实现 `/src/services/api.js` API 配置
   - 封装请求拦截器

3. **状态管理** (根据需求选择)
   ```bash
   # 轻量级
   npm install zustand
   
   # 或完整方案
   npm install @reduxjs/toolkit react-redux
   ```

### 可选的扩展

1. **UI 组件库**
   - Material-UI: `npm install @mui/material @emotion/react @emotion/styled`
   - Ant Design: `npm install antd`
   - Chakra UI: `npm install @chakra-ui/react`

2. **CSS 方案**
   - Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
   - Styled Components: `npm install styled-components`

3. **表单管理**
   - React Hook Form: `npm install react-hook-form`
   - Formik: `npm install formik yup`

4. **测试工具**
   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom
   ```

5. **工具库**
   - Lodash: `npm install lodash`
   - Day.js: `npm install dayjs`
   - UUID: `npm install uuid`

## 验证状态

### ✅ 已验证

- [x] npm 依赖安装成功
- [x] 开发服务器可正常启动
- [x] 访问 http://localhost:5173 正常
- [x] Vite 配置正确
- [x] ESLint 配置正常
- [x] 路径别名配置完成

### ⏳ 待验证

- [ ] 路由跳转 (需安装路由库)
- [ ] API 调用 (需实现 API 服务)
- [ ] 状态管理 (需选择并实现)
- [ ] 生产构建 (可运行 `npm run build`)

## 快速开始

```bash
# 1. 启动开发服务器
npm run dev

# 2. 访问
# http://localhost:5173

# 3. 开始开发
# 编辑 src/App.jsx 或创建新组件
```

## 文档导航

- [README.md](./README.md) - 项目介绍和基本说明
- [STRUCTURE.md](./STRUCTURE.md) - 详细的目录结构说明
- [QUICKSTART.md](./QUICKSTART.md) - 快速启动和安装指南
- [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) - 项目总览 (本文档)

## 注意事项

1. **代码规范**: 所有占位文件都标注了 TODO,方便后续开发
2. **路径导入**: 优先使用别名导入,如 `@components/Header`
3. **环境变量**: 创建 `.env` 文件前先复制 `.env.example`
4. **代码检查**: 提交前运行 `npm run lint`
5. **版本控制**: 确保不提交 `node_modules` 和 `dist` 目录

## 框架特点

✨ **完整的目录结构** - 符合 React 最佳实践
✨ **路径别名系统** - 简化导入路径
✨ **模块化设计** - 清晰的职责分离
✨ **易于扩展** - 预留了所有常用目录
✨ **开发就绪** - 开箱即用的开发环境
✨ **文档完善** - 详细的说明和指南

---

**框架搭建完成!** 可以开始填充具体代码实现业务功能了。
