# Dialog API

## 方法

| 方法名                     | 说明         | 参数              | 返回值       |
| -------------------------- | ------------ | ----------------- | ------------ |
| Dialog                     | 提示弹窗     | `options{Object}` | `dialog`实例 |
| Dialog.alert               | 提示弹窗     | `options{Object}` | `dialog`实例 |
| Dialog.confirm             | 展示加载提示 | `options{Object}` | `dialog`实例 |
| Dialog.clear               | 关闭弹窗     | -                 | `dialog`实例 |
| Dialog.setDefaultOptions   | 修改默认选项 | `options{Object}` | `void`       |
| Dialog.resetDefaultOptions | 重置默认选项 | `options{Object}` | `void`       |

## Options

| 参数                | 说明                                                         | 类型       | 默认值                    |
| ------------------- | ------------------------------------------------------------ | ---------- | ------------------------- |
| title               | 弹窗标题                                                     | `string`   | `''`                      |
| duration            | 展示时长(ms)，值为 0 时，toast 不会消失                      | `string`   | `''`                      |
| rightBtnText        | 右边按钮文案，alert提示弹窗的确认按钮                        | `string`   | `'确认'`                  |
| showRightBtn        | 是否显示右边按钮                                             | `boolean`  | `true`                    |
| rightBtnFn          | 右边按钮点击调用函数，设置后默认不会关闭弹窗，参数为`dialog`实例 | `function` | `this.hide()`关闭当前弹窗 |
| leftBtnText         | 左边按钮文案，alert提示弹窗时隐藏                            | `string`   | `取消`                    |
| showLeftBtn         | 是否显示左边按钮                                             | `boolean`  | `true`                    |
| leftBtnFn           | 右边按钮点击调用函数，设置后默认不会关闭弹窗，参数为`dialog`实例 | `function` | `this.hide()`关闭当前弹窗 |
| overlay             | 是否显示遮罩层                                               | `function` | `true`                    |
| overlayColor        | 遮罩层的颜色                                                 | `string`   | `'rgba(0, 0, 0, 0.7)'`    |
| closeOnClickOverlay | 点击遮罩层时是否关闭弹窗                                     | `boolean`  | `false`                   |

## dialog实例

| 方法名 | 说明     | 参数 | 默认值 |
| ------ | -------- | ---- | ------ |
| show   | 显示弹窗 | -    | `void` |
| hide   | 关闭弹窗 | -    | `void` |

