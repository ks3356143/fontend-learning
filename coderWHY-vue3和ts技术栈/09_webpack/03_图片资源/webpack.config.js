const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')

module.exports = {
    entry: "./src/index.js",
    mode: 'production', // 可以使用production和development，两者打包的js文件不一样，production打包的js只有一行了！
    output: {
        // 必须写绝对路径,我们用到node模块,path.resolve可以拼接[node知识以后再说]
        path: path.resolve(__dirname, 'dist'),
        // 不写默认是main.js
        filename: 'js/bundle.js',
        // 这个是让webpack打包的时候，第一个立即执行函数不要用箭头函数！
        assetModuleFilename: "img/[name]_[hash:10][ext]",
        environment: {
            arrowFunction: false,
        }
    },
    // 在模块module.rules数组里面，配置规则，规则数组里面是对象{}
    module: {
        rules: [
            // 写一个一个规则,一个规则为一个对象
            {
                test: /\.css$/, //根据正则表达式匹配
                use: [
                    { loader: 'style-loader' }, { loader: "css-loader" } // 先用css-loader提取css，然后用style-loader创建html<style>标签插入
                ],
                exclude: /node-modules/
            },
            {
                test: /\.less/,
                use: [
                    { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }
                ],
                exclude: /node-modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg$)/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 100 * 1024,
                    }
                },
                exclude: /node-modules/
            },
            {
                test: /\.(otf|eot|ttf|woff|woff2?)$/,
                type:'asset/resource', //一般字体文件不进行base64编码插入到js中
                generator:{
                    filename:'font/[name]_[hash:10][ext]'
                },
                exclude: /node-modules/
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            title:'哈哈哈'
        }),
        new DefinePlugin({
            // 定义变量名用于EJS
            BASE_URL:"abc"  //还可以用双引号中单引号直接赋值"'./'"
        })
    ]

}

const abc = "./" 