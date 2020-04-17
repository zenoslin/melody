<template>
    <div class="me-nav">
        <div class="nav-content">{{title}}</div>
        <div class="nav-right" @click="backHandler">
            <svg viewBox="0 0 1000 1000" class="nav-right_btn">
                <path
                    fill-rule="evenodd"
                    d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"
                />
            </svg>
            <span class="nav-right_text">{{rightText}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'me-nav',
    props: {
        title: {
            default: 'Title',
        },
        rightBtnFn: {
            default() {
                return () => {
                    this.$router.back();
                };
            },
        },
        rightText: {
            default: '返回',
        },
    },
    methods: {
        backHandler() {
            this.rightBtnFn();
        },
    },
};
</script>

<style lang="less">
@import '../style/variable.less';

.me-nav {
    position: relative;
    width: 100%;
    height: 44px;
    background-color: #fff;
    border-bottom: 1px solid @border-color;
    .nav-content {
        max-width: 60%;
        margin: 0 auto;
        font-size: 16px;
        font-weight: 500;
        line-height: 42px;
        text-align: center;
    }
    .nav-right {
        height: 44px;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &_btn {
            width: 16px;
            height: 16px;
            path {
                fill: @link-light-color;
            }
        }
        &_text {
            margin-left: 4px;
            font-size: 14px;
            color: @link-light-color;
        }
    }
}
</style>