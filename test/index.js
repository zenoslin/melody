// import Vue from 'vue';
import { mount, TransitionStub } from '@vue/test-utils';

// prevent vue warning log
// Vue.config.silent = true;

// stub transition
// Vue.component('transition', TransitionStub);

// promisify setTimeout
export function later(delay = 0) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

export { mount };
