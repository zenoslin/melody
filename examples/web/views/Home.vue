<template>
    <div class="doc">
        <header-nav />
        <simulator />
        <menu-nav />
    </div>
</template>

<script>
import headerNav from '../components/header-nav';
import simulator from '../components/simulator';
import menuNav from '../components/menu-nav';

export default {
    name: 'Home',
    components: { headerNav, simulator, menuNav },
};
</script>

<style lang="less">
.doc {
    position: relative;
}
</style>