const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    },

    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.103:8081',
                ws: true,
                changeOrigin: true,
                pathRewrtie: {
                    '^/api': '/'
                }
            }
        }
    }
};