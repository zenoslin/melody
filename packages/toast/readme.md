# Toast API

## 方法

| 方法名        | 说明         | 参数                                | 返回值    |
| ------------- | ------------ | ----------------------------------- | --------- |
| Toast         | 展示提示     | `message{string} | options{Object}` | toast实例 |
| Toast.text    | 展示文字提示 | `message{string} | options{Object}` | toast实例 |
| Toast.loading | 展示加载提示 | `message{string} | options{Object}` | toast实例 |
| Toast.loading | 关闭提示     | -                                   | toast实例 |

## Message

| 参数    | 说明     | 类型   | 默认值                                                    |
| ------- | -------- | ------ | --------------------------------------------------------- |
| message | 提示文字 | string | `text` 模式下默认 `''`， `loading` 模式下默认 `加载中...` |



## Options

| 参数       | 说明                                    | 类型    | 默认值                                                 |
| ---------- | --------------------------------------- | ------- | ------------------------------------------------------ |
| type       | 提示类型，可选值为 `text` `loading`     | string  | `text`                                                 |
| duration   | 展示时长(ms)，值为 0 时，toast 不会消失 | number  | `2000`                                                 |
| bgColor    | toast框背景颜色                         | string  | `rgba(50, 50, 51, 0.88)`                               |
| cover      | 是否显示遮罩层                          | boolean | `text` 模式下默认 `false`，`loading` 模式下默认 `true` |
| coverColor | 遮罩层颜色                              | string  | `rgba(0, 0, 0, 0)`                                     |

