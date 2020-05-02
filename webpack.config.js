require('dotenv').config();

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const PROD = 'production', DEV = 'development';
const webpackMode = process.env['NODE_ENV'] === PROD ? PROD : DEV;
const watchEnabled = process.env['NODE_ENV'] !== PROD && process.env['NODE_ENV'] !== DEV;

module.exports = {
    mode: webpackMode,
    watch: watchEnabled,
    watchOptions: { ignored: ['node_modules'], poll: 1000 },
    entry: {
        vueBundleHome: './web/vuejs/Home/Home.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/web/public/dist'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.pug$/,
                use: 'pug-plain-loader'
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};
