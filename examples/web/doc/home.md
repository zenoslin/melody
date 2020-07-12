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
