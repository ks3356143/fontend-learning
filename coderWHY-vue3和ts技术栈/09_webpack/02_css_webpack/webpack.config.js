const path = require('path')

module.exports = {
    entry: "./src/index.js",
    mode: 'production', // 可以使用production和development，两者打包的js文件不一样，production打包的js只有一行了！
    output: {
        // 必须写绝对路径,我们用到node模块,path.resolve可以拼接[node知识以后再说]
        path: path.resolve(__dirname, 'dist'),
        // 不写默认是main.js
        filename: 'bundle.js',
        // 这个是让webpack打包的时候，第一个立即执行函数不要用箭头函数！
        environment: {
            arrowFunction: false,
        }
    },
    // 在模块module.rules数组里面，配置规则，规则数组里面是对象{}
    module:{
        rules:[
            // 写一个一个规则,一个规则为一个对象
            {
                test:/\.css$/, //根据正则表达式匹配
                use:[
                    {loader:'style-loader'},{loader:"css-loader"} // 先用css-loader提取css，然后用style-loader创建html<style>标签插入
                ],
                exclude:/node-modules/
            },
        ]
    }

}