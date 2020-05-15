## Popup 弹出层

### 按需引入

```js
import Vue from 'vue';
import { Popup } from 'melody';

Vue.use(Popup);
```

### 示例

#### 基础弹出层

```vue
<!-- 居中弹出 -->
<me-popup v-model="centerShow"></me-popup>
<!-- 顶部弹出 -->
<me-popup v-model="topShow" position="top"></me-popup>
<!-- 底部弹出 -->
<me-popup v-model="bottomShow" position="bottom"></me-popup>
<!-- 左侧弹出 -->
<me-popup v-model="leftShow" position="left"></me-popup>
<!-- 右侧弹出 -->
<me-popup v-model="rightShow" position="right"></me-popup>
```
