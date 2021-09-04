const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './resources/js/app.js',
    mode: "production",
    output: {
        filename: 'querination.js',
        path: path.resolve(__dirname, 'resources', 'js', 'dist'),
        publicPath: '/resources/js'
    },
    optimization: {
        minimize: true,
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
                        outputPath: '../../fonts'
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
                            outputPath: '../../img'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../../css/dist/querination.css',
        }),
        new HtmlWebpackPlugin({
            template: '../index.html'
        })
    ]
};
