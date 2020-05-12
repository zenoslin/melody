/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */
const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);

function iframeReady(iframe, callback) {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    const interval = () => {
        if (iframe.contentWindow.replacePath) {
            callback();
        } else {
            setTimeout(() => {
                interval();
            }, 50);
        }
    };

    if (doc.readyState === 'complete') {
        interval();
    } else {
        iframe.onload = interval;
    }
}

export default {
    install(Vue, { vueRouter }) {
        window.syncPath = function() {
            const router = vueRouter;
            const isInIframe = window !== window.top;
            const currentDir = router.history.current.path;

            if (isInIframe) {
                window.top.replacePath(currentDir);
            } else if (!isMobile) {
                const iframe = document.querySelector('iframe');
                if (iframe) {
                    iframeReady(iframe, () => {
                        iframe.contentWindow.replacePath(currentDir);
                    });
                }
            }
        };

        window.replacePath = function(path = '') {
            // should preserve hash for anchor
            if (vueRouter.currentRoute.path !== path) {
                vueRouter.replace(path).catch(() => {});
            }
        };
    },
};
