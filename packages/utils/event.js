import { isServer } from './base';

export function on(target, event, handler) {
    if (!isServer) {
        target.addEventListener(event, handler);
    }
}

export function off(target, event, handler) {
    if (!isServer) {
        target.removeEventListener(event, handler);
    }
}
