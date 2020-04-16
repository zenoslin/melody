import { mount, shallowMount } from '../../../test/index';
import Button from '../button.vue';

test('click event', () => {
    const onClick = jest.fn();
    const wrapper = mount(Button, {
        listeners: {
            click: onClick,
        },
    });
    wrapper.trigger('click');
    expect(onClick).toHaveBeenCalled();
});

test('touchstart event', () => {
    const onTouchstart = jest.fn();
    const wrapper = mount(Button, {
        listeners: {
            touchstart: onTouchstart,
        },
    });
    wrapper.trigger('touchstart');
    expect(onTouchstart).toHaveBeenCalled();
});

test('按钮状态为disabled时无法触发click和touch事件', () => {
    const onClick = jest.fn();
    const onTouchstart = jest.fn();
    const wrapper = mount(Button, {
        propsData: {
            disabled: true,
        },
        listeners: {
            click: onClick,
            touchstart: onTouchstart,
        },
    });
    wrapper.trigger('click');
    wrapper.trigger('touchstart');
    expect(onClick).toHaveBeenCalledTimes(0);
    expect(onTouchstart).toHaveBeenCalledTimes(0);
});

test('当颜色为渐变时隐藏按钮边框', () => {
    const wrapper = mount(Button, {
        propsData: {
            color: 'linear-gradient(to right, #4bb0ff, #6149f6)',
        },
    });
    expect(wrapper.element.style.border).toEqual('0px');
});
