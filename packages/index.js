// 组件
import Button from './button/index.js';
import NavBar from './nav-bar/index.js';
import Row from './row/index.js';
import Col from './col/index.js';
import Icon from './icon/index.js';
import Loading from './loading/index.js';
// 方法
import Toast from './toast/index.js';

// 引入全局样式
import './style/index.less';

const components = [Button, NavBar, Row, Col, Icon, Loading];
const methods = [{ name: 'toast', method: Toast }];

const install = function(Vue) {
    if (install.installed) return;
    install.installed = true;
    components.map(component => Vue.component(component.name, component));
    methods.map(item => (Vue.prototype[`$${item.name}`] = item.method));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components,
};
