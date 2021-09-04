const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './resources/js/app.js',
    mode: "development",
    output: {
        filename: 'querination.js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist'
    },
    optimization: {
        minimize: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './fonts'
                    }
                }]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './img'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/querination.css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
