<template>
    <div class="menu-nav" :style="`top:${top}px`">
        <div
            v-for="(item,index) in menuList"
            :key="`item-${index}`"
            :class="{'menu-nav_title': item.type === 'title','menu-nav_item': item.type === 'item'}"
        >
            <span
                v-if="item.type === 'item'"
                :class="{'menu-nav_item-active':item.path === routePath}"
                @click="handleLink(item.path)"
            >{{item.name}}</span>
            <span v-else>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
import { menuList } from '../config/index.js';

export default {
    name: 'menuNav',
    data() {
        return {
            menuList: menuList,
            top: 60,
        };
    },
    computed: {
        routePath() {
            return this.$route.path;
        },
    },
    methods: {
        handleLink(path) {
            if (this.routePath === path) return;
            this.$router.push(path);
        },
    },
    mounted() {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (scrollTop > 60) {
                this.top = 0;
            } else {
                this.top = 60 - scrollTop;
            }
        });
    },
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
    box-shadow: 0 8px 12px #ebedf0;
    &_title {
        padding: 16px 0 16px 30px;
        color: #a18cd1;
        span {
            font-size: 14px;
        }
    }
    &_item {
        padding: 12px 0 12px 30px;
        color: #323233;
        span {
            font-size: 16px;
            cursor: pointer;
        }
        &-active {
            color: #ff9a9e;
        }
    }
}
</style>