// config/webpack.dev.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/grid.js',
    devtool: 'cheap-module-eval-source-map',

    

    output: {
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader?sourceMap=true', 'css-loader?sourceMap=true', 'sass-loader?sourceMap=true']
            },
            {
                test: /\.svg$/,
                use: [
                    {loader: 'url-loader'},
                    {
                        loader: 'svg-colorize-loader',
                        options: {
                            color1: '#000000',
                            color2: '#FFFFFF'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};
