# 全局样式

Melody 中包含一些全局样式，可以直接通过 `class` 进行使用

## 示例

### 基础样式

#### 标题

```vue
<div class="me-title">这是一个标题</div>
```

#### 描述

```vue
<div class="me-desc">这是一段描述</div>
```

#### 文字省略

```vue
<div class="me-text me-ellipsis">这是一段最多显示一行的文字，后面的内容会省略</div>
<div class="me-text me-multi-ellipsis--l2">这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略。</div>
<div class="me-text me-multi-ellipsis--l3">这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略。
这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略。</div>
```

#### 1px边框

```vue
<!-- 上边框 -->
<div class="me-hairline_top"></div>
<!-- 四周边框 -->
<div class="me-hairline_surround"></div>
```