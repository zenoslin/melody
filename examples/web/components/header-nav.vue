<template>
    <div class="header-nav">
        <span class="logo">Melody</span>
    </div>
</template>

<script>
export default {
    name: 'header-nav',
};
</script>

<style lang="less">
.header-nav {
    position: relative;
    width: 100%;
    height: 60px;
    // background: #45654b;
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
    .logo {
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        font-weight: 600;
        color: #fff;
    }
}
</style>