## Icon 图标

### 按需引入

```js
import Vue from 'vue';
import { Icon } from 'melody';

Vue.use(Icon);
```

### 示例

#### 基础用法

```vue
<me-icon :name="message.png"></me-icon>
```

#### 改变大小

```vue
<me-icon :name="message.png" size="48"></me-icon>
<me-icon :name="message.png" size="3rem"></me-icon>
<me-icon :name="message.png" size="12.8vw"></me-icon>
```

#### 图标提示

```vue
<me-icon :name="message.png" dot></me-icon>
<me-icon :name="message.png" badge="9"></me-icon>
<me-icon :name="message.png" badge="99+"></me-icon>
```