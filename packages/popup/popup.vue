<template>
    <section>
        <me-overlay :visible="value && overlay" :overlayColor="overlayColor" @click="handleOverlay"></me-overlay>
        <transition :name="popupTransition">
            <div v-if="value" class="me-popup">
                <div class="me-popup_content" :class="contentClass">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import Overlay from '../overlay/overlay.vue';

export default {
    name: 'me-popup',
    components: {
        'me-overlay': Overlay,
    },
    props: {
        value: Boolean,
        position: {
            type: String,
            default: 'center',
        },
        transition: {
            type: String,
            default: '',
        },
        overlay: {
            type: Boolean,
            default: true,
        },
        overlayColor: {
            type: String,
            default: 'rgba(0, 0, 0, 0.7)',
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {};
    },
    computed: {
        contentClass() {
            return [this.position ? `me-popup_content-${this.position}` : ''];
        },
        positionTransition() {
            switch (this.position) {
                case 'top':
                    return 'me-slide-down';
                case 'bottom':
                    return 'me-slide-up';
                case 'left':
                    return 'me-slide-left';
                case 'right':
                    return 'me-slide-right';
                default:
                    return 'me-fade';
            }
        },
        popupTransition() {
            return this.transition ? this.transition : this.positionTransition;
        },
    },
    methods: {
        handleOverlay() {
            if (this.closeOnClickOverlay) {
                this.$emit('input', false);
            }
        },
    },
};
</script>

<style lang="less">
.me-popup {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9997;
    pointer-events: none;
    &_content {
        pointer-events: auto;
        &-center {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
        }
        &-top {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        &-bottom {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        &-left {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }
        &-right {
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        }
    }
}
</style>