## Layout 布局

### 按需引入

```js
import Vue from 'vue';
import { Col, Row } from 'melody';

Vue.use(Col);
Vue.use(Row);
```

### 示例

#### 基础用法

`Row` 组件使用 `24格栅格`，可以用 `Col` 组件上的 `span` 属性设置所占比例，`offset`属性设置偏移距离

```vue
<me-row>
    <me-col span="8">span: 8</me-col>
    <me-col span="8">span: 8</me-col>
    <me-col span="8">span: 8</me-col>
    </me-row>
<me-row>
    <me-col span="8">span: 8</me-col>
    <me-col span="10" offset="4">span: 10</me-col>
</me-row>
<me-row>
    <me-col span="12" offset="12">span: 12</me-col>
</me-row>
```

#### 在列元素之间增加间距

```vue
<me-row gutter="20">
    <me-col span="8">span: 8</me-col>
    <me-col span="8">span: 8</me-col>
    <me-col span="8">span: 8</me-col>
</me-row>
```

#### Flex布局

```vue
<me-row type="flex">
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
</me-row>
<me-row type="flex" justify="center">
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
</me-row>
<me-row type="flex" justify="end">
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
</me-row>
<me-row type="flex" justify="space-around">
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
</me-row>
<me-row type="flex" justify="space-between">
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
    <me-col span="6">span: 6</me-col>
</me-row>
```

### Options

#### row

| 参数    | 说明                                                         | 类型            | 默认值    |
| ------- | ------------------------------------------------------------ | --------------- | --------- |
| gutter  | 元素之间的间隔（px）                                         | `string,number` | `0`       |
| type    | 布局方式，可选：`flex`                                       | `string`        | `default` |
| justify | Flex布局的对齐方式：`center` `end` `space-around` `space-between` | `string`        | `''`      |

#### col

| 参数   | 说明         | 类型            | 默认值 |
| ------ | ------------ | --------------- | ------ |
| span   | 元素宽度     | `string,number` | `''`   |
| offset | 元素偏移距离 | `string,number` | `''`   |

