<template>
    <div class="style-page">
        <me-nav title="Style"></me-nav>
        <div class="me-block">
            <div class="block-title">基础样式</div>
            <div class="me-title">这是一个标题</div>
            <div class="me-desc">这是一段描述</div>
            <div class="me-text me-ellipsis">这是一段最多显示一行的文字，后面的内容会省略</div>
            <div
                class="me-text me-multi-ellipsis--l2"
            >这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略。</div>
            <div
                class="me-text me-multi-ellipsis--l3"
            >这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略。</div>
        </div>
        <div class="me-block">
            <div class="block-title">1px边框</div>
            <div class="me-hairline_top"></div>
            <div class="me-hairline_surround"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'stylePage',
};
</script>

<style lang="less" scoped>
.style-page {
    .me-text {
        font-size: 16px;
        line-height: 20px;
        color: #000;
        margin: 0 0 15px;
    }
    .me-hairline_top {
        height: 30px;
        background: #fff;
    }
    .me-hairline_surround {
        height: 30px;
        background: #fff;
    }
}
</style>