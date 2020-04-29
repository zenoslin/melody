import Vue from 'vue';
import toastTemplate from './toast.vue';

let ToastConstructor = Vue.extend(toastTemplate);
let instance;
const defaultConfig = {
    type: 'text',
    loadingText: '加载中...',
};
const defaultOptions = {
    message: '',
    visible: false,
    duration: 2000, // 显示时间(ms)
    timer: null,
    type: '',
    bgColor: 'rgba(50, 50, 51, 0.88)',
    onOpen: null,
    onClose: null,
    cover: false, // 透明遮罩层
    coverColor: 'rgba(0, 0, 0, 0)',
};

let currentOptions = {
    ...defaultOptions,
};

function _showToast(options) {
    if (!instance) {
        instance = _creatInstance();
        instance.vm = instance.$mount();
        document.body.appendChild(instance.$el);
    }
    Object.assign(instance.$data, options);
    Vue.nextTick(() => {
        instance.show();
    });
    return instance;
}

function _hideToast() {
    if (!instance) return;
    Vue.nextTick(() => {
        instance.hide();
    });
    return instance;
}

function _creatInstance() {
    let options = {
        ...currentOptions,
    };

    return new ToastConstructor({ data: options });
}

function errorMsg(message) {
    if (!message) {
        console.warn('[Melody Toast]: message不能为空');
        return;
    }
}

let Toast = (message, options = {}) => {
    errorMsg(message);
    return _showToast({ type: 'text', message, ...options });
};

Toast.text = (message, options = {}) => {
    errorMsg(message);
    return _showToast({ type: 'text', message, ...options });
};

Toast.loading = (message = defaultConfig.loadingText, options = {}) => {
    errorMsg(message);
    return _showToast({ type: 'loading', cover: true, message, ...options });
};
Toast.clear = () => {
    return _hideToast();
};

export default Toast;
