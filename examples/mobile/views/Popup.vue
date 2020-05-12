<template>
    <div>
        <me-nav title="Popup"></me-nav>
        <div class="me-block">
            <div class="block-title">基础弹出层</div>
            <div class="block-row">
                <me-button type="primary" @click="handleCenter">居中弹出</me-button>
                <me-button type="primary" @click="handleTop">顶部弹出</me-button>
                <me-button type="primary" @click="handleBottom">底部弹出</me-button>
            </div>
            <div class="block-row">
                <me-button type="primary" @click="handleLeft">左侧弹出</me-button>
                <me-button type="primary" @click="handleRight">右侧弹出</me-button>
            </div>
        </div>
        <me-popup v-model="centerShow">
            <div class="center-popup"></div>
        </me-popup>
        <me-popup v-model="topShow" position="top">
            <div class="top-popup"></div>
        </me-popup>
        <me-popup v-model="bottomShow" position="bottom">
            <div class="bottom-popup"></div>
        </me-popup>
        <me-popup v-model="leftShow" position="left">
            <div class="left-popup"></div>
        </me-popup>
        <me-popup v-model="rightShow" position="right">
            <div class="right-popup"></div>
        </me-popup>
    </div>
</template>

<script>
export default {
    name: 'popupPage',
    data() {
        return {
            centerShow: false,
            topShow: false,
            bottomShow: false,
            leftShow: false,
            rightShow: false,
        };
    },
    methods: {
        handleCenter() {
            this.centerShow = true;
        },
        handleTop() {
            this.topShow = true;
        },
        handleBottom() {
            this.bottomShow = true;
        },
        handleLeft() {
            this.leftShow = true;
        },
        handleRight() {
            this.rightShow = true;
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
.center-popup {
    width: 300px;
    height: 200px;
    background: #fff;
}
.top-popup {
    width: 100vw;
    height: 200px;
    background: #fff;
}
.bottom-popup {
    width: 100vw;
    height: 200px;
    background: #fff;
}
.left-popup {
    width: 200px;
    height: 100vh;
    background: #fff;
}
.right-popup {
    width: 200px;
    height: 100vh;
    background: #fff;
}
</style>
