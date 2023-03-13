const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require("webpack-merge")

const commonConfig = require("./webpack.comm.config")
module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'source-map', //主要是一种映射关系
    devServer: {
        static: {
            directory: path.join(__dirname, './public')
        },
        hot: true,
        // host: "192.168.0.5",
        port: 8000,
        open: true,
        compress: true, //默认是false
        proxy: {
            "/api": {
                target: "http://localhost:8888",
                pathRewrite: {
                    "^/api": "" //重写为空的，正则匹配原理
                },
                secure: false,
                changeOrigin: true,
            }
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
})