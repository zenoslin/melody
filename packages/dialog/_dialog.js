import Vue from 'vue';
import dialogTemplate from './dialog.vue';

const DialogConstructor = Vue.extend(dialogTemplate);
let instance;

const defaultOptions = {
    title: '',
    message: '',
    leftBtnText: '取消',
    showLeftBtn: false,
    leftBtnFn: null,
    rightBtnText: '确认',
    showRightBtn: true,
    rightBtnFn: null,
    overlay: true,
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    closeOnClickOverlay: false,
};

let currentOptions = {
    ...defaultOptions,
};

function _showDialog(options) {
    if (!instance) {
        instance = _createInstance();
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

function _createInstance() {
    let options = {
        ...currentOptions,
    };

    return new DialogConstructor({ data: options });
}

let Dialog = options => {
    return _showDialog(options);
};

Dialog.alert = options => {
    return _showDialog(options);
};
Dialog.confirm = options => {
    return _showDialog({ showLeftBtn: true, ...options });
};
Dialog.clear = () => {
    return _hideToast();
};
Dialog.setDefaultOptions = options => {
    Object.assign(currentOptions, options);
};
Dialog.resetDefaultOptions = () => {
    Object.assign(currentOptions, defaultOptions);
};

export default Dialog;
