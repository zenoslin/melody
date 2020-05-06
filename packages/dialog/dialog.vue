<template>
    <section>
        <me-overlay
            :visible="visible && overlay"
            :overlayColor="overlayColor"
            @click="handleOverlay"
        ></me-overlay>
        <transition name="me-slide-up">
            <div class="me-dialog" v-if="visible">
                <div class="me-dialog_content">
                    <div class="me-dialog_inner-title" v-html="title"></div>
                    <div class="me-dialog_inner-message" v-html="message"></div>
                    <div class="me-dialog_box">
                        <me-button
                            class="me-dialog_btn me-hairline_top me-hairline_right"
                            v-if="showLeftBtn"
                            @click="handleLeftBtn"
                        >{{leftBtnText}}</me-button>
                        <me-button
                            class="me-dialog_btn me-hairline_top"
                            v-if="showRightBtn"
                            @click="handleRightBtn"
                        >{{rightBtnText}}</me-button>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import Overlay from '../overlay/overlay.vue';
import Button from '../button/button.vue';

export default {
    name: 'me-dialog',
    components: {
        'me-overlay': Overlay,
        'me-button': Button,
    },
    data() {
        return {
            visible: false,
            title: '',
            message: '',
            leftBtnText: '取消',
            showLeftBtn: false,
            leftBtnFn: null,
            rightBtnText: '确认',
            showRightBtn: true,
            rightBtnFn: null,
            overlay: true,
            overlayColor: 'rgba(0, 0, 0, 0.7)',
            closeOnClickOverlay: false,
        };
    },
    computed: {},
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
        handleOverlay() {
            if (this.closeOnClickOverlay) {
                this.visible = false;
            }
        },
        handleLeftBtn() {
            if (!this.rightBtnFn) {
                this.visible = false;
                return;
            }
            typeof this.leftBtnFn === 'function' && this.leftBtnFn(this);
        },
        handleRightBtn() {
            if (!this.rightBtnFn) {
                this.visible = false;
                return;
            }
            typeof this.leftBtnFn === 'function' && this.leftBtnFn(this);
        },
    },
};
</script>

<style lang="less">
.me-dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9998;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &_content {
        width: 320px;
        background: #fff;
        border-radius: 16px;
        pointer-events: auto;
        text-align: center;
        .me-dialog_inner {
            &-title {
                padding-top: 24px;
                font-size: 16px;
                font-weight: 500;
                line-height: 20px;
            }
            &-message {
                padding: 12px 24px 24px;
            }
        }
        .me-dialog_box {
            display: flex;
            .me-dialog_btn {
                width: 100%;
                height: 50px;
                background: transparent;
                border: 0;
            }
        }
    }
}
</style>