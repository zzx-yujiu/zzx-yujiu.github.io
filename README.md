# Personal Web 项目

基于 React + Vite 构建的现代化网页前端框架。

## 项目结构

```
personal_web1/
├── public/                 # 静态资源目录
├── src/
│   ├── assets/            # 资源文件
│   │   ├── images/        # 图片资源
│   │   └── icons/         # 图标资源
│   ├── components/        # 可重用组件
│   │   ├── Header.jsx     # 头部组件
│   │   ├── Footer.jsx     # 页脚组件
│   │   └── README.md
│   ├── pages/             # 页面组件
│   │   ├── Home.jsx       # 首页
│   │   ├── About.jsx      # 关于页面
│   │   └── README.md
│   ├── layouts/           # 布局组件
│   │   ├── MainLayout.jsx # 主布局
│   │   └── README.md
│   ├── hooks/             # 自定义 Hooks
│   │   └── README.md
│   ├── utils/             # 工具函数
│   │   ├── constants.js   # 常量定义
│   │   └── README.md
│   ├── services/          # API 服务
│   │   ├── api.js         # API 配置
│   │   └── README.md
│   ├── context/           # React Context
│   │   └── README.md
│   ├── styles/            # 全局样式
│   │   ├── global.css     # 全局样式文件
│   │   └── README.md
│   ├── App.jsx            # 根组件
│   ├── App.css            # 根组件样式
│   ├── main.jsx           # 入口文件
│   └── index.css          # 入口样式
├── .gitignore             # Git 忽略文件
├── package.json           # 项目依赖
├── vite.config.js         # Vite 配置
├── eslint.config.js       # ESLint 配置
└── README.md              # 项目说明

```

## 技术栈

- **React 19.2.4** - UI 框架
- **Vite 8.0.1** - 构建工具
- **ESLint** - 代码检查

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 开发指南

### 目录说明

- **components/**: 存放可复用的 UI 组件
- **pages/**: 存放页面级组件
- **layouts/**: 存放布局组件,定义页面结构
- **hooks/**: 存放自定义 React Hooks
- **utils/**: 存放工具函数和辅助方法
- **services/**: 存放 API 调用和外部服务
- **context/**: 存放全局状态管理的 Context
- **styles/**: 存放全局样式文件

### 编码规范

- 组件文件使用 `.jsx` 扩展名
- 工具函数使用 `.js` 扩展名
- 组件使用 PascalCase 命名
- 函数和变量使用 camelCase 命名
- 常量使用 UPPER_SNAKE_CASE 命名

## 待办事项

- [ ] 实现路由配置
- [ ] 添加状态管理
- [ ] 完善组件库
- [ ] 添加单元测试
- [ ] 优化构建配置

## License

MIT
