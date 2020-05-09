import Vue from 'vue';

export const isServer = Vue.prototype.$isServer;

export const isDef = val => {
    return val !== undefined && val !== null;
};

export const isFunction = val => {
    return typeof val === 'function';
};

export const isObject = val => {
    return val !== null && typeof val === 'object';
};
