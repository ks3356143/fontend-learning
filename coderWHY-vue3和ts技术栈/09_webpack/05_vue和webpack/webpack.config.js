const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader/dist/index')

module.exports = {
    entry: "./src/index.js",
    devtool:"source-map",
    mode: 'development',// 'production', // 可以使用production和development，两者打包的js文件不一样，production打包的js只有一行了！
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
            {
                test: /\.(less|css)/,
                use: [
                    { loader: 'style-loader' }, { loader: 'css-loader' },{
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins:[
                                    require('postcss-preset-env')
                                ]
                            },
                        }
                    }, { loader: 'less-loader' }
                ],
                exclude: /node-modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg$)/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
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
            {
                test:/\.js$/i,
                use:'babel-loader',
                exclude:/node-modules/
            },
            {
                test:/\.vue$/i,
                use:'vue-loader',
                exclude:/node-modules/
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
            BASE_URL:"'./'"
        }),
        new CopyWebpackPlugin({
            patterns:[ //匹配多个文件夹到文件夹
                {
                    from:"public", // 从哪里复制
                    to:'./',
                    globOptions:{
                        ignore:[
                            "**/index.html"
                        ]
                    }
                }
            ]
        }),
        new VueLoaderPlugin(),
    ]

}