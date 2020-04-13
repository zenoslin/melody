import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Melody from '../packages/index';
import '../packages/style/index.less';

Vue.use(Melody);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
