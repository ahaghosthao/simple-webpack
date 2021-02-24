const {resolve} = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, '../src/', 'main.js'),
    output: {
        path: resolve(__dirname, '../dist/'),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            // 处理 vue 后缀结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 处理图片文件
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    name: "[path][name].[ext]",
                    limit: 4096
                }
            },
            {
                test:/\.(woff|ttf|eot)/,
                loader:'file-loader'
            },
            // 处理 css 结尾的文件
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: "css-loader",
                        // 这个配置文件主要是用来解决 在服务端打包时style样式不生效问题
                        options: {
                            esModule:false
                        }
                    },
                    'postcss-loader'
                ]
            },
            // 处理 stylus 文件
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            esModule:false
                        }
                    },
                    'postcss-loader',
                    'stylus-loader'
                ]
            },
            // 处理 scss 文件
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            esModule:false
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js/,
                exclude: (file)=>{
                    return /node_modules/.test(file) && !/\.vue\.js/.test(file)
                },
                use:{
                    loader: "babel-loader",
                    options: {
                        presets:['@babel/preset-env']
                    }
                }

            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve(__dirname, '../src/', 'index.html'),
        }),

    ],
    resolve: {
        alias: {
            'vue':'vue/dist/vue.js'
        },
    }

}