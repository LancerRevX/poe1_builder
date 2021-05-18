let { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './source/main.ts',
    mode: 'development',
    output: {
        filename: 'script.js'
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
}