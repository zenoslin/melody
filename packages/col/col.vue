<template>
    <div class="me-col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'me-col',
    props: {
        span: {
            type: [String, Number],
            default: '',
        },
        offset: {
            type: [String, Number],
            default: '',
        },
    },
    computed: {
        colClass() {
            return [
                +this.span > 0 ? `me-col_${this.span}` : '',
                +this.offset > 0 ? `me-col_offset-${this.offset}` : '',
            ];
        },
        gutter() {
            return this.$parent && this.$parent.gutter | 0;
        },
        colStyle() {
            return `padding-left:${this.gutter / 2}px;padding-right:${this.gutter /
                2}px;`;
        },
    },
};
</script>

<style lang="less">
.me-col {
    float: left;
    box-sizing: border-box;
    min-height: 1px;
}

.generate-col(24);
.generate-col(@n, @i: 1) when (@i =< @n) {
    .me-col_@{i} {
        width: @i * 100% / 24;
    }

    .me-col_offset-@{i} {
        margin-left: @i * 100% / 24;
    }

    .generate-col(@n, (@i + 1));
}
</style>