const { defineConfig } = require("@vue/cli-service")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "/",
    outputDir: "dist",
    devServer: {
        host: "localhost",
        port: 8055,
        open: true // 启动打开浏览器
    },
    // configureWebpack: {
    //     plugins: [
    //         require("unplugin-element-plus/webpack")({
    //             // 使用该插件css自动引用，组件需要自己引用
    //         })
    //     ]
    // }
    configureWebpack: {
        plugins: [
            // ...
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ]
    }
})
