<template>
    <div class="sticky-page">
        <me-nav title="Sticky"></me-nav>
        <div class="block-title">基础吸顶</div>
        <me-sticky class="me-sticky">
            <me-button class="stick-btn" style="margin-left:20px" type="primary">基础吸顶</me-button>
        </me-sticky>
        <div class="block-title">吸顶距离</div>
        <me-sticky :offset-top="50">
            <me-button class="stick-btn" style="margin-left:120px" type="info">吸顶距离</me-button>
        </me-sticky>
        <div class="block-title">指定容器</div>
        <div ref="container" style="height: 150px;background: #7d7e80;">
            <me-sticky :container="container">
                <me-button class="stick-btn" style="margin-left:220px" type="warning">指定容器</me-button>
            </me-sticky>
        </div>
    </div>
</template>

<script>
export default {
    name: 'stickyPage',
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

<style lang="less" scoped>
.block-title {
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    padding: 12px 20px;
    color: #7d7e80;
}
.sticky-page {
    height: 3000px;
}
.me-button_normal:not(:last-child) {
    margin-right: 16px;
}
.me-button_small:not(:last-child) {
    margin-right: 16px;
}
.me-button_large {
    margin-bottom: 12px;
}
</style>
