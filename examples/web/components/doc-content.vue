<template>
    <div class="doc-content">
        <div class="doc-content_box markdown-body" v-html="doc"></div>
    </div>
</template>

<script>
import dialogDoc from '../../../packages/dialog/readme.md';

export default {
    name: 'docContent',
    data() {
        return {
            doc: dialogDoc,
        };
    },
};
</script>

<style lang="less">
.doc-content {
    width: 100%;
    margin-bottom: 60px;
    padding: 20px 410px 0 240px;
    box-sizing: border-box;
    overflow: hidden;
    &_box {
        padding: 24px;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: 0 8px 12px #ebedf0;
    }
}
</style>