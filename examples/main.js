import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Melody from '../packages';

Vue.use(Melody);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
