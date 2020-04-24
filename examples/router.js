import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/button',
            name: 'button',
            component: () => import(/* webpackChunkName: "button" */ './views/Button.vue'),
        },
        {
            path: '/layout',
            name: 'layout',
            component: () => import(/* webpackChunkName: "layout" */ './views/Layout.vue'),
        },
        {
            path: '/icon',
            name: 'icon',
            component: () => import(/* webpackChunkName: "icon" */ './views/Icon.vue'),
        },
        {
            path: '/style',
            name: 'style',
            component: () => import(/* webpackChunkName: "style" */ './views/Style.vue'),
        },
        {
            path: '/nav-bar',
            name: 'navbar',
            component: () => import(/* webpackChunkName: "navbar" */ './views/NavBar.vue'),
        },
        {
            path: '*',
            name: 'home',
            component: Home,
        },
    ],
});
