import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '../lib/theme/index.css';
import Melody from '../lib/index.umd.min.js';

Vue.use(Melody);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
