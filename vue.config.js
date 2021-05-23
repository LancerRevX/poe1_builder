module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    },
    publicPath: '/poe1_builder/',
};
