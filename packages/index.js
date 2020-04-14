import Button from './button/index.js';
import Icon from './icon/index.js';
import NavBar from './nav-bar/index.js';
import "./style/index.less";

const components = [Button, Icon, NavBar];

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
