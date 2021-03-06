import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import IframeRouter from '../common/iframe-router';

// 加载组件库
import Melody from '../../packages/index.js';

// 加载全局样式
import './style/index.less';

Vue.use(Melody);
Vue.use(IframeRouter, { vueRouter: router, isFrame: true });

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
