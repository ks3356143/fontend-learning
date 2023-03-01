const path = require('path')

module.exports = {
    entry: "./src/index.js",
    mode: 'production', // 可以使用production和development，两者打包的js文件不一样，production打包的js只有一行了！
    output: {
        // 必须写绝对路径,我们用到node模块,path.resolve可以拼接[node知识以后再说]
        path: path.resolve(__dirname, 'dist'),
        // 不写默认是main.js
        filename: 'bundle.js'
    }
}