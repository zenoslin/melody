<template>
    <button class="me-button" @click="clickHandler">{{ buttonLabel }}</button>
</template>

<script>
export default {
    name: 'me-button',
    props: { buttonLabel: { default: '确定' } },
    methods: {
        clickHandler() {
            console.log(this.buttonLabel);
        },
    },
};
</script>

<style></style>
