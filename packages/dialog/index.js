import Dialog from './_dialog';

Dialog.install = Vue => {
    Vue.prototype['$dialog'] = Toast;
};

export default Dialog;
