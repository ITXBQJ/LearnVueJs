const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader只负责将css文件进行加载
                //style-loader负责将样式添加到DOM中
                //使用多个loader时，从右向左读
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片小于limit时，会将图片编译成base64字符串形式。
                            //当加载的图片大于limit时，需要使用file-loader模块进行加载
                            limit: 8192,
                            name: "img/[name].[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    resolve: {
        extensions:['.js','.css','.vue'],
        //别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('最终版权归狐sun所有'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        inline:true
    }
}