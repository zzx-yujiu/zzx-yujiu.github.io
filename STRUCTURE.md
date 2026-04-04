# 项目结构说明

## 目录结构

### `/src` - 源代码目录

#### `/src/components` - 可重用组件
存放可在多个页面中复用的 UI 组件。

**命名规范**: PascalCase (例如: `Button.jsx`, `Card.jsx`)

**示例组件**:
- `Header.jsx` - 页面头部组件
- `Footer.jsx` - 页面尾部组件
- `Button.jsx` - 按钮组件
- `Modal.jsx` - 模态框组件
- `Card.jsx` - 卡片组件

#### `/src/pages` - 页面组件
存放页面级组件,每个文件代表一个路由页面。

**命名规范**: PascalCase (例如: `Home.jsx`, `About.jsx`)

**示例页面**:
- `Home.jsx` - 首页
- `About.jsx` - 关于页面
- `Contact.jsx` - 联系页面
- `NotFound.jsx` - 404 页面

#### `/src/layouts` - 布局组件
存放定义页面结构的布局组件。

**命名规范**: PascalCase + Layout 后缀 (例如: `MainLayout.jsx`)

**示例布局**:
- `MainLayout.jsx` - 主布局(包含 Header 和 Footer)
- `AuthLayout.jsx` - 认证页面布局
- `DashboardLayout.jsx` - 仪表盘布局

#### `/src/hooks` - 自定义 Hooks
存放可复用的自定义 React Hooks。

**命名规范**: camelCase + use 前缀 (例如: `useAuth.js`)

**示例 Hooks**:
- `useAuth.js` - 认证相关
- `useFetch.js` - 数据获取
- `useLocalStorage.js` - 本地存储
- `useDebounce.js` - 防抖

#### `/src/utils` - 工具函数
存放纯函数工具和辅助方法。

**命名规范**: camelCase (例如: `formatDate.js`)

**示例工具**:
- `constants.js` - 常量定义
- `formatDate.js` - 日期格式化
- `validate.js` - 表单验证
- `helpers.js` - 通用辅助函数

#### `/src/services` - 服务层
存放 API 调用和外部服务交互逻辑。

**命名规范**: camelCase + Service 后缀 (例如: `authService.js`)

**示例服务**:
- `api.js` - API 基础配置
- `authService.js` - 认证服务
- `userService.js` - 用户服务
- `productService.js` - 产品服务

#### `/src/context` - 全局状态
存放 React Context 用于全局状态管理。

**命名规范**: PascalCase + Context 后缀 (例如: `AuthContext.jsx`)

**示例 Context**:
- `AuthContext.jsx` - 认证状态
- `ThemeContext.jsx` - 主题状态
- `UserContext.jsx` - 用户状态

#### `/src/assets` - 静态资源
存放图片、图标等静态资源文件。

**子目录**:
- `/assets/images` - 图片文件
- `/assets/icons` - 图标文件

#### `/src/styles` - 全局样式
存放全局 CSS 样式文件。

**示例样式文件**:
- `global.css` - 全局样式
- `variables.css` - CSS 变量
- `reset.css` - 样式重置
- `theme.css` - 主题样式

#### `/src/router` - 路由配置
存放路由配置文件。

**文件**:
- `index.jsx` - 路由配置

### 根目录文件

- `vite.config.js` - Vite 构建配置
- `jsconfig.json` - JavaScript 配置(路径别名等)
- `eslint.config.js` - ESLint 代码检查配置
- `package.json` - 项目依赖和脚本
- `.gitignore` - Git 忽略文件配置
- `.env.example` - 环境变量示例

## 路径别名

项目已配置路径别名,可以使用以下方式导入:

```javascript
// 传统方式
import Header from '../../components/Header';

// 使用别名
import Header from '@components/Header';
import Home from '@pages/Home';
import { API_URL } from '@utils/constants';
import api from '@services/api';
```

### 可用别名

- `@/` → `src/`
- `@components/` → `src/components/`
- `@pages/` → `src/pages/`
- `@layouts/` → `src/layouts/`
- `@hooks/` → `src/hooks/`
- `@utils/` → `src/utils/`
- `@services/` → `src/services/`
- `@context/` → `src/context/`
- `@assets/` → `src/assets/`
- `@styles/` → `src/styles/`

## 开发规范

### 组件开发

1. 每个组件一个文件
2. 使用函数式组件和 Hooks
3. Props 类型建议使用 PropTypes 或 TypeScript
4. 组件应该是纯函数,易于测试

### 样式管理

1. 全局样式放在 `/src/styles`
2. 组件样式可以使用:
   - CSS Modules
   - Styled Components
   - Tailwind CSS (需要额外安装)

### 状态管理

1. 局部状态使用 useState
2. 跨组件状态使用 Context API
3. 复杂应用可以考虑 Redux 或 Zustand

### 文件命名

- 组件文件: `PascalCase.jsx`
- 工具文件: `camelCase.js`
- 样式文件: `kebab-case.css`
- 常量文件: `UPPER_SNAKE_CASE` 或 `camelCase`

## 下一步

1. 安装路由库: `npm install react-router-dom`
2. 安装状态管理: `npm install zustand` 或 `npm install @reduxjs/toolkit`
3. 安装 UI 库: `npm install @mui/material` 或其他
4. 安装 HTTP 客户端: `npm install axios`
5. 配置单元测试: `npm install -D vitest @testing-library/react`
