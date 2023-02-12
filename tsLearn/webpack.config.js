const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 设定模式不然webpack4.0会报错
    mode: 'development',
    // 指定打包文件所在目录
    output: {
        // 指定打包文件目录
        path: path.resolve(__dirname, 'dist'), //__dirname用来动态获取当前文件模块所属目录的绝对路径
        // 打包后文件的文件
        filename: "bundle.js",
        environment:{
            arrowFunction:false,
        }
    },
    // 指定webpack打包时候使用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test指定的是规则生效的文件，对哪些文件生效
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            "chrome": 88,
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ],
                            ]
                        },
                    },
                    'ts-loader',
                ], //连起来意思就是用ts-loader编译以.ts结尾的文件
                exclude: /node-modules/  //注意//不是文件路径符号是正则表达式开始和结尾
            },
            {
                test: /\.less/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browser:'last 2 version' //全部浏览器最新两个版本
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader",
                ],
                exclude: /node-modules/,
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}