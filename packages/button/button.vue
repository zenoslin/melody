<template>
    <button
        class="me-button"
        :type="nativeType"
        :class="buttonClass"
        :style="buttonStyle"
        :disabled="disabled"
        @click="onClick"
        @touchstart="onTouchstart"
    >
        <slot>{{text}}</slot>
    </button>
</template>

<script>
export default {
    name: 'me-button',
    props: {
        text: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'normal',
        },
        type: {
            type: String,
            default: 'default',
        },
        plain: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        square: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false,
        },
        block: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: '',
        },
        nativeType: {
            type: String,
            default: 'button',
        },
    },
    computed: {
        buttonClass() {
            return [
                `me-button_${this.size}`,
                `me-button_${this.type}`,
                { 'me-button_plain': this.plain },
                { 'me-button_disabled': this.disabled },
                { 'me-button_square': this.square },
                { 'me-button_round': this.round },
                { 'me-button_block': this.block },
            ];
        },
        buttonStyle() {
            if (this.color === '') return '';
            if (this.plain) {
                return `color: ${this.color}; border-color: ${this.color};`;
            }
            return `color: #fff; background: ${this.color}; border-color: ${this.color};`;
        },
    },
    methods: {
        onClick(event) {
            this.$emit('click', event);
        },
        onTouchstart(event) {
            this.$emit('touchstart', event);
        },
    },
};
</script>

<style lang="less">
@import '../style/variable.less';

.me-button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 44px;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 42px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
    &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: #000;
        border: inherit;
        border-color: #000;
        border-radius: inherit; /* inherit parent's border radius */
        transform: translate(-50%, -50%);
        opacity: 0;
        content: ' ';
    }
    &:active::before {
        opacity: 0.1;
    }

    &_normal {
        font-size: 14px;
        padding: 0 15px;
    }

    &_default {
        color: @text-normal-color;
        background-color: #fff;
        border: 1px solid @border-color;
    }
    &_primary {
        color: #fff;
        background-color: @green;
        border: 1px solid @green;
    }
    &_info {
        color: #fff;
        background-color: @bule;
        border: 1px solid @bule;
    }
    &_danger {
        color: #fff;
        background-color: @red;
        border: 1px solid @red;
    }
    &_warning {
        color: #fff;
        background-color: @orange;
        border: 1px solid @orange;
    }

    &_plain {
        background-color: #fff;
        &.me-button_primary {
            color: @green;
        }
        &.me-button_info {
            color: @bule;
        }
        &.me-button_danger {
            color: @red;
        }
        &.me-button_warning {
            color: @orange;
        }
    }

    &_disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    &_square {
        border-radius: 0;
    }
    &_round {
        border-radius: 999px;
    }
    &_large {
        width: 100%;
        height: 50px;
        line-height: 48px;
    }
    &_small {
        min-width: 60px;
        height: 30px;
        padding: 0 8px;
        font-size: 12px;
        line-height: 28px;
    }
    &_mini {
        min-width: 50px;
        height: 22px;
        font-size: 10px;
        line-height: 20px;
    }
    &_block {
        display: block;
        width: 100%;
    }
}
</style>