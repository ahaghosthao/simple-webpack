const {merge} = require('webpack-merge')
const {resolve} =  require('path');
const baseConfig = require('./webpack.base');
const webpack = require('webpack')

const devConfig = {
    mode:'development',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    // 解决热模块不生效的问题
    //https://blog.csdn.net/qq_24172179/article/details/111824802
    // https://webpack.docschina.org/configuration/target/#target
    target:'web',
    devServer: {
        contentBase:resolve(__dirname,'../dist/'),
        host:'localhost',
        port:2333,
        open:true,
        hot:true
    },
}
module.exports = merge(baseConfig,devConfig)

