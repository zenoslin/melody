import Button from './button/index.js';
import Icon from './icon/index.js';

const components = [Button, Icon];

const install = function(Vue) {
    if (install.installed) return;
    install.installed = true;
    components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

// export { Button };

export default {
    install,
    ...components,
};
