<template>
    <div :style="stickyStyle">
        <div :class="boxClass" :style="boxStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { isDef, isServer } from '../utils/base.js';
import { BindEventMixin } from '../mixins/bind-event.js';
import { getScrollTop, getElementTop, getScroller } from '../utils/scroll.js';
import { isHidden } from '../utils/style.js';

export default {
    name: 'me-sticky',
    data() {
        return {
            fixed: false,
            height: 0,
            transform: 0,
            scroller: null,
        };
    },
    props: {
        zIndex: {
            type: [Number, String],
            default: null,
        },
        container: {
            default: null,
        },
        offsetTop: {
            type: [Number, String],
            default: 0,
        },
    },
    computed: {
        stickyStyle() {
            return `height: ${this.fixed ? `${this.height}px` : null}`;
        },
        boxStyle() {
            if (!this.fixed) return '';
            let style = '';
            if (isDef(this.zIndex)) {
                style += `zindex:${this.zIndex};`;
            }
            if (this.offsetTop && this.fixed) {
                style += `top:${this.offsetTop}px;`;
            }
            if (this.transform) {
                style += `transform:translate3d(0, ${this.transform}px, 0);`;
            }
            return style;
        },
        boxClass() {
            return { 'me-sticky_fixed': this.fixed };
        },
    },
    methods: {
        onScroll() {
            if (isHidden(this.$el)) {
                return;
            }

            this.height = this.$el.offsetHeight;

            const { container } = this;
            const offsetTop = +this.offsetTop;
            const scrollTop = getScrollTop(window);
            const topToPageTop = getElementTop(this.$el);

            const emitScrollEvent = () => {
                this.$emit('scroll', {
                    scrollTop,
                    isFixed: this.fixed,
                });
            };

            // The sticky component should be kept inside the container element
            if (container) {
                const bottomToPageTop = topToPageTop + container.offsetHeight;

                if (scrollTop + offsetTop + this.height > bottomToPageTop) {
                    const distanceToBottom = this.height + scrollTop - bottomToPageTop;

                    if (distanceToBottom < this.height) {
                        this.fixed = true;
                        this.transform = -(distanceToBottom + offsetTop);                        
                    } else {
                        this.fixed = false;
                    }
                    emitScrollEvent();
                    return;
                }
            }

            if (scrollTop + offsetTop > topToPageTop) {
                this.fixed = true;
                this.transform = 0;
            } else {
                this.fixed = false;
            }

            emitScrollEvent();
        },
    },
    mixins: [
        BindEventMixin(function(bind, isBind) {
            if (!this.scroller) {
                this.scroller = getScroller(this.$el);
            }

            if (this.observer) {
                const method = isBind ? 'observe' : 'unobserve';
                this.observer[method](this.$el);
            }

            bind(this.scroller, 'scroll', this.onScroll, true);
            this.onScroll();
        }),
    ],
    created() {
        if (!isServer && window.IntersectionObserver) {
            this.observer = new IntersectionObserver(
                entries => {
                    if (entries[0].intersectionRatio > 0) {
                        this.onScroll();
                    }
                },
                { root: document.body },
            );
        }
    },
};
</script>

<style lang="less" scoped>
.me-sticky {
    &_fixed {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 99;
    }
}
</style>
