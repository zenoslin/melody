# Melody

轻量的 Vue 组件库

## 安装

默认使用 `yarn` ，没有安装的可以用 `npm run` 替代

```bash
# 安装依赖
$ yarn
# 开发模式
$ yarn dev
# 打包代码
$ yarn build
# 单元测试
$ yarn test
# 打包组件库
$ yarn lib
# 发布主页
$ yarn deploy
```

## 简介

项目基于 `vue-cli` 初始化  
示例页面使用 `vue-cli` 启动  
打包流程使用 `rollup`  
单元测试使用 `jest`

## 目录结构

```
project
├─ build                    # 打包使用脚本
├─ config                   # 打包配置项
├─ doc                      # 文档
├─ examples                 # 开发用的示例页面
├─ lib                      # 打包后的代码遵循 umd 规范
│   ├─ theme                # style 目录
│   ├─ button.js            # button 组件编译后的代码
│   ├─ button.umd.js        # button 组件编译后遵循 umd 规范的代码
│   ├─ button.umd.min.js    # button 组件编译后压缩遵循 umd 规范的代码
│   └─ index.js             # 引入所有组件的入口
│
├─ packages                 # 开发组件
│   ├─ button               # button组件目录
│   │   ├─ test             # button组件的测试目录
│   │   │   └─index.spec.js # button组件的单元测试
│   │   │
│   │   ├─ button.vue       # button组件代码
│   │   └─ index.js         # button组件入口
│   │
│   ├─ style                # button组件目录
│   │   ├─ base.less        # 组件库基础样式
│   │   ├─ index.less       # 组件库样式入口
│   │   └─ variable.less    # 组件库样式变量
│   │
│   └─index.js              # 组件库入口
│
├─ public                   # 示例页面静态html
├─ test                     # 单元测试通用方法
└─  tools                   # 打包过程工具函数
```
