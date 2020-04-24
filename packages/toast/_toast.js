import Vue from 'vue';
import toastTemplate from './toast.vue';

let ToastConstructor = Vue.extend(toastTemplate);

function _showToast() {
    return;
}

let Toast = {
    text(msg, obj = {}) {
        return _showToast();
    },
};

export default Toast;
