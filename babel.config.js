module.exports = {
    presets: ['@vue/app'],
    plugins: [
        [
            'import',
            {
                libraryName: '../packages',
                libraryDirectory: '',
                // camel2DashComponentName: false,
            },
            'melody',
        ],
    ],
};
