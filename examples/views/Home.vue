<template>
    <div class="home">
        <div class="me-title text-center">Melody</div>
        <div class="me-desc text-center">轻量的移动端Vue组件库</div>
        <div class="group">
            <div class="me-desc">basics基础</div>
            <a class="group-item" href="#/layout">Layout布局</a>
            <a class="group-item" href="#/style">Style样式</a>
            <a class="group-item" href="#/button">Button按钮</a>
            <a class="group-item" href="#/icon">Icon图标</a>
            <a class="group-item" href="#/nav-bar">NavBar导航栏</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {},
};
</script>

<style lang="less">
.home {
    padding: 20px;
}
.group {
    margin-top: 40px;
    &-item {
        width: 100%;
        margin: 0 0 12px;
        padding-left: 20px;
        color: #323233;
        font-weight: 500;
        font-size: 14px;
        line-height: 40px;
        background: #f7f8fa;
        box-sizing: border-box;
        border-radius: 99px;
    }
}
</style>