import { sum } from './js/math.js'
import { priceFormat } from './js/format.js';

// 为了打包加依赖
import './js/element.js'
console.log(sum(20, 30));
console.log(priceFormat());

const message = 'Hello World'
const names = ['abc', 'bca']
names.forEach(item => { console.log(item); })
console.log(message);

// 引入vue,把vue当成是一个模块,引用为一个函数
import { createApp } from 'vue/dist/vue.esm-bundler.js'

// vue代码
// 导入SFC文件里面默认到处的根组件对象
import App from './vue/App.vue'

const app = createApp(App)
app.mount('#app')