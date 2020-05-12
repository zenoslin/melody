<template>
    <div class="icon-page">
        <me-nav title="Icon"></me-nav>
        <div class="me-block">
            <div class="block-title">基础用法</div>
            <me-row>
                <me-col span="6">
                    <me-icon :name="messageIcon"></me-icon>
                </me-col>
            </me-row>
        </div>
        <div class="me-block">
            <div class="block-title">改变大小</div>
            <me-row>
                <me-col span="6">
                    <me-icon :name="messageIcon" size="48"></me-icon>
                </me-col>
                <me-col span="6">
                    <me-icon :name="messageIcon" size="3rem"></me-icon>
                </me-col>
                <me-col span="6">
                    <me-icon :name="messageIcon" size="12.8vw"></me-icon>
                </me-col>
            </me-row>
        </div>
        <div class="me-block">
            <div class="block-title">图标提示</div>
            <me-row>
                <me-col span="6">
                    <me-icon :name="messageIcon" dot></me-icon>
                </me-col>
                <me-col span="6">
                    <me-icon :name="messageIcon" badge="9"></me-icon>
                </me-col>
                <me-col span="6">
                    <me-icon :name="messageIcon" badge="99+"></me-icon>
                </me-col>
            </me-row>
        </div>
    </div>
</template>

<script>
import messageIcon from '../assets/message.png';

export default {
    name: 'iconPage',
    data() {
        return {
            messageIcon: messageIcon,
        };
    },
};
</script>

<style lang="less" scoped>
.icon-page {
    .me-col {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .me-icon {
        margin: 16px auto;
    }
}
</style>
