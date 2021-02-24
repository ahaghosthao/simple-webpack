const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const productionConfig = {
    mode: "production",
    plugin:[
        new CleanWebpackPlugin(),
    ]
}

module.exports = merge(baseConfig, productionConfig)