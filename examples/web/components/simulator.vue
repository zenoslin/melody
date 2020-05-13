<template>
    <div class="simulator" :style="`top:${top}px`" >
        <iframe src="/mobile/index.html" frameborder="0" id="frame_full" scrolling="auto"></iframe>
    </div>
</template>

<script>
export default {
    name: 'simulator',
    data() {
        return {
            top: 100,
        };
    },
    mounted() {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (scrollTop > 60) {
                this.top = 30;
            } else {
                this.top = 100 - scrollTop;
            }
        });
    },
};
</script>

<style lang="less">
.simulator {
    width: 375px;
    // position: absolute;
    // top: 100px;
    position: fixed;
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
@media (max-width: 1300px) {
    .simulator {
        right: auto;
        left: 950px;
    }
}
</style>