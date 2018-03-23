const
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

const
    src = path.resolve(__dirname, 'src'),
    dist = path.resolve(__dirname, 'dist');

const config = {
    entry: path.resolve(src, 'index.js'),

    output: {
        path: dist,
        filename: 'bundle.js'
    },

    resolve: {
        modules: [src, 'node_modules']
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 9000
    },

    module: {
        rules: []
    },

    plugins: [
        new CleanWebpackPlugin(dist, {
            root: __dirname,
            verbose: true
        }),

        new HtmlWebpackPlugin({
            filetype: 'pug'
        }),

        new HtmlWebpackPlugin({
            filename: 'index.pug'
        }),

        new HtmlWebpackPugPlugin()
    ]
};

module.exports = config;