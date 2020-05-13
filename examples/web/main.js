import 'normalize.css';
import './style/github-markdown.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import IframeRouter from '../common/iframe-router';

// 引入全局样式
import './style/index.less'

Vue.use(IframeRouter, { vueRouter: router });

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
