<template>
    <div class="simulator">
        <iframe src="/mobile/index.html" frameborder="0" id="frame_full" scrolling="auto"></iframe>
    </div>
</template>

<script>
export default {
    name: 'simulator',
};
</script>

<style lang="less">
.simulator {
    width: 375px;
    // height: 667px;
    position: absolute;
    top: 100px;
    right: 20px;
    border-radius: 12px;
    box-shadow: #ebedf0 0 4px 12px;
    overflow: hidden;
    iframe {
        width: 100%;
        height: 667px;
        display: block;
        border: 0;
    }
}
</style>