# Melody

文档地址: [https://zenoslin.github.io/melody/](https://zenoslin.github.io/melody/)

## 介绍

Melody 是一个轻量的移动端 Vue 组件库

### 安装

```bash
# 通过npm安装
npm i @melodyui/melody -S

# or 通过yarn 安装
yarn add @melodyui/melody
```

### 引入组件

#### 方法一：自动按需引入（推荐）

[`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 `import` 的写法自动转换为按需引入的方式

安装插件
```bash
# 通过npm安装
npm i babel-plugin-import -D

# or 通过yarn 安装
yarn add babel-plugin-import

在 `babel.config.js` 中配置

```js
module.exports = {
    plugins: [
        [
            'import',
            {
                libraryName: '@melodyui/melody',
                libraryDirectory: '',
            },
            'melody',
        ],
    ],
};
```

在vue中按需引入

```js
import { Button } from '@melodyui/melody';
```


#### 方法二：引入所有组件

```js
import Vue from 'vue';
import Melody from '@melodyui/melody';
Vue.use(Melody);
```

## 项目相关

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
