const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'examples/web/main.js',
            template: 'examples/web/index.html',
            filename: 'index.html',
        },
        mobile: {
            entry: 'examples/mobile/main.js',
            template: 'examples/mobile/index.html',
            filename: 'mobile/index.html',
        },
    },

    // 扩展 webpack 配置
    chainWebpack: config => {
        // @ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增一个 ~ 指向 packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'));

        // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
    },

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './packages/style/variable.less')],
        },
    },
};
