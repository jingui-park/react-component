# 初始化项目

```bash
pnpm dlx create-react-app react-component 不推荐使用 pnpm 安装，因为使用 pnpm 安装的不能被sb识别
npx create-react-app react-component 
```

# 安装使用 storybook

1. 不推荐

```bash
pnpx storybook init 因为这个会比较久，所以我们全局安装 storybook 的形式
```

2. 推荐

```bash
npm install storybook -g
sb init 
```

之后使用命令 打开 storybook 项目

```bash
npm run storybook
```

# 忘了添加 ts 支持， cra 如何添加？

[参考链接](https://create-react-app.dev/docs/adding-typescript/)

```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

```
