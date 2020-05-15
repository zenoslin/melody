<template>
    <i class="me-icon">
        <img class="me-icon_img" :src="name" :style="imgStyle" />
        <div v-if="isShowBadge" class="me-icon_badge" :class="{'me-icon_badge-dot':dot}">{{badge}}</div>
    </i>
</template>

<script>
import { isNumber } from '../utils/number.js';

export default {
    name: 'me-icon',
    props: {
        name: {
            default: '',
        },
        size: {
            type: [String, Number],
            default: '32',
        },
        dot: {
            type: Boolean,
            default: false,
        },
        badge: {
            type: [String, Number],
            default: '',
        },
    },
    computed: {
        imgStyle() {
            return `width:${this.addUnit(this.size)};height:${this.addUnit(this.size)};`;
        },
        isShowBadge() {
            return (
                this.dot ||
                isNumber(this.badge) ||
                (!isNumber(this.badge) && this.badge !== '')
            );
        },
    },
    methods: {
        addUnit(str) {
            return isNumber(str) ? `${str}px` : str;
        },
    },
};
</script>

<style lang="less">
@import '../style/variable.less';

.me-icon {
    position: relative;
    display: inline-block;
    &_img {
        width: 32px;
        height: 32px;
    }
    &_badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        transform-origin: 100%;
        box-sizing: border-box;
        min-width: 16px;
        padding: 0 3px;
        color: #fff;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        background-color: @red;
        border-radius: 16px;
    }
    &_badge-dot {
        width: 8px;
        min-width: 0;
        height: 8px;
        background-color: @red;
        border-radius: 100%;
    }
}
</style>
