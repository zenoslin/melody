<template>
    <div>
        <me-nav title="Button"></me-nav>
        <div class="me-block">
            <div class="block-title">基础按钮</div>
            <div class="block-row">
                <me-button type="default">默认按钮</me-button>
                <me-button type="primary">主要按钮</me-button>
                <me-button type="info">信息按钮</me-button>
            </div>
            <div class="block-row">
                <me-button type="danger">危险按钮</me-button>
                <me-button type="warning" >警告按钮</me-button>
            </div>
        </div>
        <div class="me-block">
            <div class="block-title">朴素按钮</div>
            <div class="block-row">
                <me-button plain type="primary">朴素按钮</me-button>
                <me-button plain type="info">朴素按钮</me-button>
            </div>
        </div>
        <div class="me-block">
            <div class="block-title">禁用状态</div>
            <div class="block-row">
                <me-button disabled type="primary">禁用状态</me-button>
                <me-button disabled type="info">禁用状态</me-button>
            </div>
        </div>
        <div class="me-block">
            <div class="block-title">按钮形状</div>
            <div class="block-row">
                <me-button square type="primary">方形按钮</me-button>
                <me-button round type="info">圆角按钮</me-button>
            </div>
        </div>
        <div class="me-block">
            <div class="block-title">按钮尺寸</div>
            <me-button size="large" type="primary">大号按钮</me-button>
            <me-button size="normal" type="primary">普通按钮</me-button>
            <me-button size="small" type="primary">小型按钮</me-button>
            <me-button size="mini" type="primary">迷你按钮</me-button>
        </div>
        <div class="me-block">
            <div class="block-title">块级元素</div>
            <me-button type="primary" block>大号按钮</me-button>
        </div>
        <div class="me-block">
            <div class="block-title">自定义颜色</div>
            <me-button color="#7232dd" type="primary">单色按钮</me-button>
            <me-button color="#7232dd" type="primary">单色按钮</me-button>
            <me-button color="linear-gradient(to right, #4bb0ff, #6149f6)" type="primary">渐变按钮</me-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'buttonPage',
    methods: {
        onClick(event) {
            console.log(event);
        },
        onTouchstart(event) {
            console.log(event);
        },
    },
};
</script>

<style lang="less" scoped>
.block-title {
    font-size: 14px;
    line-height: 16px;
    margin: 0;
    padding: 12px 0;
    color: @desc-color;
}
.block-row {
    margin-bottom: 12px;
}
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
