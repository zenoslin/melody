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
