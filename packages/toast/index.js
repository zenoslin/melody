import Toast from './_toast.js';

Toast.install = Vue => {
    Vue.prototype['$toast'] = Toast;
};

export default Toast;
