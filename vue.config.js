module.exports = {
    lintOnSave:false,
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/videoserver': {
                target: 'http://localhost:8070/',
                changeOrigin: true,
                pathRewrite: {
                    '^/videoserver': ''
                }
            },

        }
    }
}