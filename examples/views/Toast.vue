<template>
    <div>
        <me-nav title="Toast"></me-nav>
        <div class="me-block">
            <div class="block-title">基础提示</div>
            <div class="block-row">
                <me-button type="primary" @click="handleText">文字提示</me-button>
                <me-button type="info" @click="handleLongText">长文字提示</me-button>
                <me-button type="primary" @click="handleLoading">加载提示</me-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'toastPage',
    methods: {
        handleText() {
            this.$toast('提示内容');
        },
        handleLongText() {
            this.$toast.text(
                '这是一段长长的提示内容，这是一段长长的提示内容，这是一段长长的提示内容',
            );
        },
        handleLoading() {
            this.$toast.loading();
            setTimeout(() => {
                this.$toast.clear();
            }, 2000);
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
