module.exports = {
    presets: ['@vue/app'],
    plugins: [
        [
            'import',
            {
                libraryName: '../lib',
                libraryDirectory: '',
                // camel2DashComponentName: false,
            },
            'melody',
        ],
    ],
};
