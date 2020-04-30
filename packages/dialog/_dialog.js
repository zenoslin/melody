import Vue from 'vue';
import dialogTemplate from './dialog.vue';

const DialogConstructor = Vue.extend(dialogTemplate);
let instance;

const defaultOptions = {
    title: '',
    message: '',
    leftBtnText: '取消',
    showLeftBtn: false,
    rightBtnText: '确认',
    showRightBtn: true,
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

let Dialog = {
    alert(options) {
        return _showDialog(options);
    },
};

export default Dialog;
