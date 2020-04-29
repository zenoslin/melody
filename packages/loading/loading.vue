<template>
    <span class="me-loading">
        <svg class="me-loading_circular" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" />
        </svg>
    </span>
</template>

<script>
export default {
    name: 'me-loading',
};
</script>

<style lang="less">
.me-loading {
    position: relative;
    display: inline-block;
    width: 30px;
    max-width: 100%;
    height: 30px;
    max-height: 100%;
    color: #fff;
    animation: me-rotate 2s linear infinite;
    &_circular {
        display: block;
        width: 100%;
        height: 100%;
        circle {
            animation: me-circular 1.5s ease-in-out infinite;
            stroke: currentColor;
            stroke-width: 3;
            stroke-linecap: round;
        }
    }
}

@keyframes me-circular {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40;
    }

    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120;
    }
}
</style>