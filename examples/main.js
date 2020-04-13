import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Melody from '../lib/index.umd.min.js';

Vue.use(Melody);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
