<template>
    <div class="doc">
        <header-nav />
        <simulator />
        <menu-nav />
        <doc-content />
    </div>
</template>

<script>
import headerNav from '../components/header-nav';
import simulator from '../components/simulator';
import menuNav from '../components/menu-nav';
import docContent from '../components/doc-content';

export default {
    name: 'Home',
    components: { headerNav, simulator, menuNav, docContent },
};
</script>

<style lang="less">
.doc {
    position: relative;
}
</style>