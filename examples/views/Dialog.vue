<template>
    <div>
        <me-nav title="Dialog"></me-nav>
        <div class="me-block">
            <div class="block-title">基础弹窗</div>
            <div class="block-row">
                <me-button type="primary" @click="handleDialog">提示弹窗</me-button>
                <me-button type="primary" @click="handleNoTitle">无标题提示弹窗</me-button>
            </div>
            <div class="block-title">确认弹窗</div>
            <div class="block-row">
                <me-button type="primary" @click="handleConfirm">确认弹窗</me-button>
                <me-button type="primary" @click="handleOverlay">点击背景取消</me-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dialogPage',
    methods: {
        handleDialog() {
            this.$dialog.alert({ title: '标题', message: '弹窗内容' });
        },
        handleNoTitle() {
            this.$dialog.alert({ message: '弹窗内容' });
        },
        handleConfirm() {
            this.$dialog.confirm({ title: '标题', message: '弹窗内容' });
        },
        handleOverlay() {
            this.$dialog.confirm({ title: '标题', message: '弹窗内容', closeOnClickOverlay: true });
        },
    },
};
</script>

<style lang="less" scoped>
.me-button_normal:not(:last-child) {
    margin-right: 16px;
}
.me-button_small:not(:last-child) {
    margin-right: 16px;
}
.me-button_large {
    margin-bottom: 12px;
}
</style>
