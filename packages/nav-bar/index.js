import NavBar from './nav-bar.vue';

NavBar.install = function(Vue) {
    Vue.component(NavBar.name, NavBar);
};

export default NavBar;
