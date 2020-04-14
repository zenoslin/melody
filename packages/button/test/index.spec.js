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
