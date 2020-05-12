<template>
    <div id="app">
        <transition :name="routerAni" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            routerAni: '',
            routerHistory: [],
        };
    },
    watch: {
        $route(to, from) {
            if (to.path === from.path) {
                return;
            }
            if (
                this.routerHistory.length > 0 &&
                to.path === this.routerHistory[this.routerHistory.length - 1]
            ) {
                this.routerAni = 'me-page-leave';
                this.routerHistory.pop();
            } else {
                this.routerAni = 'me-page-enter';
                this.routerHistory.push(from.path);
            }
        },
    },
};
</script>

<style lang="less">
#app {
    background: #fff;
}
</style>
