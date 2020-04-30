import Vue from 'vue';
import toastTemplate from './toast.vue';

let ToastConstructor = Vue.extend(toastTemplate);
let instance;

const defaultOptions = {
    message: '',
    visible: false,
    duration: 2000, // 显示时间(ms)
    timer: null,
    type: 'text',
    bgColor: 'rgba(50, 50, 51, 0.88)',
    onOpen: null,
    onClose: null,
    cover: false, // 透明遮罩层
    coverColor: 'rgba(0, 0, 0, 0)',
    loadingText: '加载中...',
    transition: 'me-fade',
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
    Object.assign(instance.$data, { ...currentOptions, ...options });
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

Toast.loading = (message = currentOptions.loadingText, options = {}) => {
    errorMsg(message);
    return _showToast({ type: 'loading', cover: true, message, ...options });
};
Toast.clear = () => {
    return _hideToast();
};
Toast.setDefaultOptions = options => {
    Object.assign(currentOptions, options);
    console.log(currentOptions);
};
Toast.resetDefaultOptions = () => {
    Object.assign(currentOptions, defaultOptions);
};

export default Toast;
