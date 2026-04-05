# @vben/msh

一个 Shell 脚本工具集合，用于 Mamba Admin 项目的开发和管理。

## 功能特性

- 🚀 基于 Node.js 的现代化 Shell 工具
- 📦 支持模块化开发和按需加载
- 🔍 提供依赖检查和分析功能
- 🔄 支持循环依赖扫描
- 📝 提供包发布检查功能

## 安装

```bash
# 使用 pnpm 安装
pnpm add -D @mamba/msh

# 或者使用 npm
npm install -D @mamba/msh

# 或者使用 yarn
yarn add -D @mamba/msh
```

## 使用方法

### 全局安装

```bash
# 全局安装
pnpm add -g @mamba/msh

# 使用 msh 命令
msh [command]
```

### 本地使用

```bash
# 在 package.json 中添加脚本
{
  "scripts": {
    "msh": "msh"
  }
}

# 运行命令
pnpm msh [command]
```

## 命令列表

- `msh check-deps`: 检查项目依赖
- `msh scan-circular`: 扫描循环依赖
- `msh publish-check`: 检查包发布配置
