<template>
    <transition :name="transition">
        <div class="me-toast" :class="{'me-toast_cover': cover}" :style="toastStyle" v-if="visible">
            <div class="me-toast_loading" v-if="type === 'loading'">
                <div class="me-toast_loading-spinner">
                    <me-loading></me-loading>
                </div>
                <div class="me-toast_loading-text" v-html="message"></div>
            </div>
            <div class="me-toast_inner" v-if="type === 'text'">
                <span class="me-toast_inner-text" v-html="message"></span>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'me-toast',
    data() {
        return {
            message: '',
            visible: false,
            duration: 2000, // 显示时间(ms)
            timer: null,
            type: '',
            bgColor: 'rgba(50, 50, 51, 0.88)',
            onOpen: null,
            onClose: null,
            cover: false, // 透明遮罩层
            coverColor: 'rgba(0, 0, 0, 0)',
            transition: 'me-fade',
        };
    },
    computed: {
        toastStyle() {
            return `${this.cover ? `background: ${this.coverColor}` : ''}`;
        },
    },
    methods: {
        show() {
            this.clearTimer();
            this.visible = true;
            typeof this.onOpen === 'function' && this.onOpen();
            if (this.type !== 'loading' && this.duration) {
                this.timer = setTimeout(() => {
                    this.hide();
                }, this.duration);
            }
        },
        hide() {
            this.clearTimer();
            this.visible = false;
            typeof this.onClose === 'function' && this.onClose();
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        },
    },
    destroyed() {
        this.timer = null;
    },
};
</script>

<style lang="less">
.me-toast {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &_cover {
        pointer-events: auto;
    }
    &_inner {
        position: relative;
        display: inline-block;
        min-width: 24px;
        max-width: 65%;
        padding: 8px 12px;
        background: rgba(50, 50, 51, 0.88);
        border-radius: 8px;
        text-align: center;
        word-break: break-all;
        &-text {
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
        }
    }
    &_loading {
        min-width: 120px;
        min-height: 120px;
        background: rgba(50, 50, 51, 0.88);
        border-radius: 8px;
        &-spinner {
            width: 60px;
            height: 60px;
            margin: 16px auto 8px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-text {
            color: #fff;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
        }
    }
}
</style>
