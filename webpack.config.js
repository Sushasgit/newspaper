const
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

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
        contentBase: path.join(__dirname, 'src'),
        host: '127.0.0.1',
        port: 8085
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                use:['raw-loader', 'pug-html-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(dist, {
            root: __dirname,
            verbose: true
        }),

        new HtmlWebpackPlugin({
            filetype: 'pug',
            template:'./src/index.pug'
        })
    ]
};

module.exports = config;