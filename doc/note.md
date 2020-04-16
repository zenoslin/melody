# Melody 开发笔记

## 全局样式

### 打包流程

在 `packages/index.js` 中引入 `style/index.less` 让 `rollup` 打包全局样式。

### 开发流程

使用 `vue-cli` 添加 `style-resources-loader`  插件

```bash
$ vue add style-resources-loader
```

```js
// vue.config.js
pluginOptions: {
	'style-resources-loader': {
		preProcessor: 'less',
		patterns: [path.resolve(__dirname, './packages/style/index.less')]
	}
}
```

## 单元测试

- 无法渲染 `style` 中的渐变

