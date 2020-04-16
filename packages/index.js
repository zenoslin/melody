import Button from './button/index.js';
import NavBar from './nav-bar/index.js';
import Row from './row/index.js';
import Col from './col/index.js';

// 引入全局样式
import './style/index.less';

const components = [Button, NavBar, Row, Col];

const install = function(Vue) {
    if (install.installed) return;
    install.installed = true;
    components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components,
};
