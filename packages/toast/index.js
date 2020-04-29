import Toast from './_toast';

Toast.install = Vue => {
    Vue.prototype['$toast'] = Toast;
};

export default Toast;
