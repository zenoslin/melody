<template>
    <transition name="me-fade">
        <div v-if="visible" class="me-overlay" :style="overlayStyle" @click="onClick"></div>
    </transition>
</template>

<script>
export default {
    name: 'me-overlay',
    props: {
        overlayColor: {
            type: String,
            default: 'rgba(0, 0, 0, 0.7)',
        },
        transition: {
            type: String,
            default: 'me-fade',
        },
        visible: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        overlayStyle() {
            return `background: ${this.overlayColor}`;
        },
    },
    methods: {
        onClick() {
            this.$emit('click');
        },
    },
};
</script>

<style lang="less">
.me-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
}
</style>