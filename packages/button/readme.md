## Button 按钮

### 按需引入

```js
import Vue from 'vue';
import { Button } from 'melody';

Vue.use(Button);
```

### 示例

#### 基础按钮

```vue
<me-button type="default">默认按钮</me-button>
<me-button type="primary">主要按钮</me-button>
<me-button type="info">信息按钮</me-button>
<me-button type="danger">危险按钮</me-button>
<me-button type="warning">警告按钮</me-button>
```

#### 朴素按钮

```vue
<me-button plain type="primary">朴素按钮</me-button>
<me-button plain type="info">朴素按钮</me-button>
```

#### 禁用状态

```vue
<me-button disabled type="primary">禁用状态</me-button>
<me-button disabled type="info">禁用状态</me-button>
```

#### 按钮形状

```vue
<me-button square type="primary">方形按钮</me-button>
<me-button round type="info">圆角按钮</me-button>
```

#### 按钮尺寸

```vue
<me-button size="large" type="primary">大号按钮</me-button>
<me-button size="normal" type="primary">普通按钮</me-button>
<me-button size="small" type="primary">小型按钮</me-button>
<me-button size="mini" type="primary">迷你按钮</me-button>
```

#### 块级元素

```vue
<me-button type="primary" block>块级按钮</me-button>
```

#### 自定义颜色

```vue
<me-button color="#7232dd" type="primary">单色按钮</me-button>
<me-button plain color="#7232dd" type="primary">单色按钮</me-button>
<me-button color="linear-gradient(to right, #4bb0ff, #6149f6)" type="primary">渐变按钮</me-button>
```

### Options

| 参数        | 说明                                                         | 类型      | 默认值    |
| ----------- | ------------------------------------------------------------ | --------- | --------- |
| text        | 按钮文字                                                     | `string`  | `''`      |
| size        | 按钮大小，可选 `normal` `large` `small` `mini`               | `string`  | `normal`  |
| type        | 按钮类型，可选 `default` `primary` `info` `danger` `warning` | `string`  | `default` |
| plain       | 按钮是否使用朴素类型                                         | `boolean` | `false`   |
| disabled    | 按钮是否禁用                                                 | `boolean` | `false`   |
| square      | 按钮是否方形                                                 | `boolean` | `false`   |
| round       | 按钮是否使用圆角                                             | `boolean` | `false`   |
| block       | 按钮是否使用块级                                             | `boolean` | `false`   |
| native-type | 原生 button 标签的 type 属性                                 | `string`  | `button`  |

### Events

| 事件名     | 说明                   | 回调参数         |
| ---------- | ---------------------- | ---------------- |
| click      | 点击按钮，禁用时不触发 | event:Event      |
| touchstart | 开始触摸按钮时触发     | event:TouchEvent |

