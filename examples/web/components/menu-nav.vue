<template>
    <div class="menu-nav">
        <div
            v-for="(item,index) in menuList"
            :key="`item-${index}`"
            :class="{'menu-nav_title': item.type === 'title','menu-nav_item': item.type === 'item'}"
        >
            <a :href="item.path">{{item.name}}</a>
        </div>
    </div>
</template>

<script>
import { menuList } from '../config';

export default {
    name: 'menuNav',
    data() {
        return {
            menuList: menuList,
        };
    },
    methods: {},
};
</script>

<style lang="less">
.menu-nav {
    top: 60px;
    left: 0;
    position: fixed;
    width: 220px;
    height: calc(100vh - 60px);
    padding: 24px 0;
    background: #fff;
    overflow-y: auto;
    &_title {
        padding: 16px 0 16px 30px;
        a {
            font-size: 14px;
            color: #a18cd1;
        }
    }
    &_item {
        padding: 12px 0 12px 30px;
        a {
            font-size: 16px;
            color: #323233;
        }
    }
}
</style>