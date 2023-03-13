const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
    target: "web",
    devtool: 'source-map', //主要是一种映射关系
    mode: 'development', //还有production用于生产环境
    entry: "./src/index.js",
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
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        hot: true,
        // host: "192.168.0.5",
        port:8000,
        open:true,
        compress:true, //默认是false
        proxy:{
            "/api":{
                target:"http://localhost:8888",
                pathRewrite:{
                    "^/api":"" //重写为空的，正则匹配原理
                },
                secure:false,
                changeOrigin:true,
            }
        },
    },
    resolve:{
        extensions:['.js','.json','.mjs','.vue','.ts','.tsx','.jsx'],
        alias:{
            "@":path.resolve(__dirname,"./src")
        }
    },
    // 在模块module.rules数组里面，配置规则，规则数组里面是对象{}
    module: {
        rules: [
            {
                test: /\.(less|css)/,
                use: [
                    { loader: 'style-loader' }, { loader: 'css-loader' }, {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
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
                type: 'asset/resource', //一般字体文件不进行base64编码插入到js中
                generator: {
                    filename: 'font/[name]_[hash:10][ext]'
                },
                exclude: /node-modules/
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node-modules/
            },
            {
                test: /\.vue$/i,
                use: [
                    "vue-loader"
                ],
                exclude: /node-modules/
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: '你是猪儿我是飞！'
        }),
        new DefinePlugin({
            BASE_URL: "'./'",
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './public',
                    to: './',
                    globOptions: {
                        ignore: '**/index.html'
                    }
                }
            ]
        }),
        new VueLoaderPlugin(),
    ]

}