# Toast 提示

## 按需引入

```js
import Vue from 'vue';
import { Toast } from 'melody';

Vue.use(Toast);
```

## 示例

### 文字提示

```js
this.$toast('提示内容');
// 长文字提示
this.$toast.text('这是一段长长的提示内容，这是一段长长的提示内容，这是一段长长的提示内容');
```

### 加载提示

```js
this.$toast.loading();
setTimeout(() => {
    this.$toast.clear();
}, 2000);
```

## 方法

| 方法名                    | 说明         | 参数                               | 返回值     |
| ------------------------- | ------------ | ---------------------------------- | ---------- |
| Toast                     | 展示提示     | `message{string}, options{Object}` | toast 实例 |
| Toast.text                | 展示文字提示 | `message{string}, options{Object}` | toast 实例 |
| Toast.loading             | 展示加载提示 | `message{string}, options{Object}` | toast 实例 |
| Toast.clear               | 关闭提示     | -                                  | toast 实例 |
| Toast.setDefaultOptions   | 修改默认选项 | `options{Object}`                  | `void`     |
| Toast.resetDefaultOptions | 重置默认选项 | `options{Object}`                  | `void`     |

## Message

| 参数    | 说明     | 类型   | 默认值                                                    |
| ------- | -------- | ------ | --------------------------------------------------------- |
| message | 提示文字 | string | `text` 模式下默认 `''`， `loading` 模式下默认 `加载中...` |

## Options

| 参数       | 说明                                             | 类型       | 默认值                                                 |
| ---------- | ------------------------------------------------ | ---------- | ------------------------------------------------------ |
| type       | 提示类型，可选值为 `text` `loading`              | `string`   | `text`                                                 |
| duration   | 展示时长(ms)，值为 0 时，toast 不会消失          | `number`   | `2000`                                                 |
| bgColor    | toast 框背景颜色                                 | `string`   | `rgba(50, 50, 51, 0.88)`                               |
| cover      | 是否显示遮罩层                                   | `boolean`  | `text` 模式下默认 `false`，`loading` 模式下默认 `true` |
| coverColor | 遮罩层颜色                                       | `string`   | `rgba(0, 0, 0, 0)`                                     |
| onOpen     | 打开时的回调函数                                 | `Function` | `null`                                                 |
| onClose    | 关闭时的回调函数                                 | `Function` | `null`                                                 |
| transition | 指定展示动画绑定 `transition` 标签的 `name` 属性 | `string`   | `me-fade`                                              |
