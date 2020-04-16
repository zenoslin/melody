<template>
    <div class="me-row" :class="rowClass" :style="rowStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'me-row',
    props: {
        gutter: {
            type: [String, Number],
            default: 0,
        },
        type: {
            type: String,
            default: 'default',
        },
        justify: {
            type: String,
            default: '',
        },
    },
    computed: {
        rowClass() {
            return [
                { 'me-row_flex': this.type === 'flex' },
                this.justify !== '' ? `me-row_justify-${this.justify}` : '',
            ];
        },
        rowStyle() {
            return `margin-left:${-this.gutter / 2}px;margin-right:${-this.gutter / 2}px`;
        },
    },
};
</script>

<style lang="less">
.me-row {
    &::after {
        display: table;
        clear: both;
        content: '';
    }
    &_flex {
        display: flex;
        &::after {
            display: none;
        }
    }
    &_justify-center {
        justify-content: center;
    }
    &_justify-end {
        justify-content: flex-end;
    }
    &_justify-space-around {
        justify-content: space-around;
    }
    &_justify-space-between {
        justify-content: space-between;
    }
}
</style>