import { sum } from './js/math.js'
import { priceFormat } from './js/format.js';

// 为了打包加依赖
import './js/element.js'
if(module.hot){
    module.hot.accept("./js/element.js",function(){
        console.log('element热替换了');
    })
}

console.log(sum(20, 30));
console.log(priceFormat());

//babel编译器测试
const str = [1,2,3]

const str1 = '你是猪'
console.log(str1);
//引入vue
import {createApp} from 'vue/dist/vue.esm-bundler.js'
import App from './vue/App'

const app = createApp(App)
app.mount('#app')

//webpack-dev-server
console.log('webpack-dev-server!!');
console.log('webpack-dev-server!!');

//导入axios库
import axios from 'axios';
axios.get("http://localhost:8888/moment").then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})