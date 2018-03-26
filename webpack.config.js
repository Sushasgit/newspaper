const
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

const
    src = path.resolve(__dirname, 'src'),
    dist = path.resolve(__dirname, 'dist');

const config = {
    entry: [
        path.resolve(src, 'index.js'),
        path.resolve(src, './css/main.css')
    ],

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
            },

            {
                test: /\.css$/i,
                use:  ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
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
        }),

        new ExtractTextPlugin({
            filename: "main.css"
        })
    ]
};

module.exports = config;