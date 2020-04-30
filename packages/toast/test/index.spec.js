import Toast from '../_toast';

test('toast message', () => {
    const toast = Toast('提示内容');
    expect(toast.message).toBe('提示内容');
});

test('open toast', () => {
    const onOpenFn = jest.fn();
    Toast('提示内容', { onOpen: onOpenFn });
    setTimeout(() => {
        expect(onOpenFn).toHaveBeenCalled();
    }, 300);
});

test('close toast', () => {
    const onCloseFn = jest.fn();
    Toast('提示内容', { onClose: onCloseFn });
    setTimeout(() => {
        Toast.clear();
        setTimeout(() => {
            expect(onCloseFn).toHaveBeenCalled();
        }, 300);
    }, 300);
});
