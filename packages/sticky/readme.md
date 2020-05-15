## Sticky

### 按需引入

```js
import Vue from 'vue';
import { Sticky } from 'melody';

Vue.use(Sticky);
```

### 示例

#### 基础吸顶

```vue
<me-sticky class="me-sticky">
    <me-button class="stick-btn" style="margin-left:20px" type="primary">基础吸顶</me-button>
</me-sticky>
```

#### 吸顶距离

```vue
<me-sticky :offset-top="50">
    <me-button class="stick-btn" style="margin-left:120px" type="info">吸顶距离</me-button>
</me-sticky>
```

#### 指定容器

```vue
<template>
    <div ref="container" style="height: 150px;background: #7d7e80;">
        <me-sticky :container="container">
            <me-button class="stick-btn" style="margin-left:220pxtype="warning">指定容器</me-button>
        </me-sticky>
    </div>
</template>

<script>
export default {
    data() {
        return {
            container: null,
        };
    },
    mounted() {
        this.container = this.$refs.container;
    },
};
</script>
```