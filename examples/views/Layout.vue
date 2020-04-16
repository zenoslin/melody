<template>
    <div class="layout-page">
        <me-nav title="Layout"></me-nav>
        <div class="me-block">
            <div class="block-title">基础用法</div>
            <me-row>
                <me-col span="8">span: 8</me-col>
                <me-col span="8">span: 8</me-col>
                <me-col span="8">span: 8</me-col>
            </me-row>
            <me-row>
                <me-col span="8">span: 8</me-col>
                <me-col span="10" offset="4">span: 10</me-col>
            </me-row>
            <me-row>
                <me-col span="12" offset="12">span: 12</me-col>
            </me-row>
        </div>
        <div class="me-block">
            <div class="block-title">在列元素之间增加间距</div>
            <me-row gutter="20">
                <me-col span="8">span: 8</me-col>
                <me-col span="8">span: 8</me-col>
                <me-col span="8">span: 8</me-col>
            </me-row>
        </div>
        <div class="me-block">
            <div class="block-title">Flex 布局</div>
            <me-row type="flex">
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
            </me-row>
            <me-row type="flex" justify="center">
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
            </me-row>
            <me-row type="flex" justify="end">
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
            </me-row>
            <me-row type="flex" justify="space-around">
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
            </me-row>
            <me-row type="flex" justify="space-between">
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
                <me-col span="6">span: 6</me-col>
            </me-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'layoutPage',
};
</script>

<style lang="less" scoped>
.layout-page {
    .me-col {
        margin-bottom: 10px;
        color: #fff;
        font-size: 13px;
        line-height: 30px;
        text-align: center;
        background-clip: content-box;
    }
    .me-col:nth-child(odd) {
        background-color: @darkgray;
    }
    .me-col:nth-child(even) {
        background-color: @lightgray;
    }
}
</style>

