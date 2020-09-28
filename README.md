# 简介

## 项目介绍

本项目为基于 create-react-app，在此基础上进行搭建的移动端 ts 框架。ui 框架默认使用 antd-mobile，状态管理使用 mobx。

## 项目启动步骤

1. 安装相应依赖 npm install;
2. 创建页面级组件 npm run page `组件名`，注意，组件名请使用驼峰命名规范；
3. 项目运行 npm start;
4. 项目打包 npm run build;

## 目录结构

1. view ---- 页面级组件
2. component ---- 公用组件，推荐使用函数式组件。
3. api ---- 接口定义，创建文件请于页面级组件同名，使用驼峰命名
4. assets ---- 图片，css，全局定义相关
5. stores ---- mobx store
6. utils ---- 工具函数
7. template ---- 模板文件

## 使用步骤

1. 执行 npm run page 页面名 命令创建相应的页面级组件，如手动创建请自行添加路由
2. 在 api 文件夹下创建与之对应的接口文件
3. 在 store 文件夹下创建与之对应的 store 文件，如不使用 mobx 可不创建
4. 编写代码

## 注意点

1. 此项目默认对请求做过相应的分装，详情可查看 utils 文件夹下的 http.tsx 文件
2. 使用 npm run page 创建的页面级组件无需在 Routes.tsx 文件中定义相应路由，会自动生成
3. 路由已采用懒加载的方式，如需关闭，可修改 Routes.tsx 文件
4. 此项目已对 webpack 打包后的文件进行过相应的优化
