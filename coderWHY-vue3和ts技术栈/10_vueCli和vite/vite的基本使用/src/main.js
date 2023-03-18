import {sum} from './js/math.js'
import _ from '../node_modules/lodash-es/lodash.default.js'
console.log("hello-world1");
console.log(sum(20,30));

// lodash-es是一个工具包
console.log(_.join(["abc",'cba'],"-"));

// 添加css
import './css/style.css'

const titleEle = document.createElement('div')
titleEle.className = 'title'
titleEle.innerHTML = "你好vite1123"
document.body.appendChild(titleEle)
import './css/style.less'

//ts支持
import mul from './ts/mult'
console.log(mul(20,30));

//对vue的支持
import {createApp} from 'vue'
import App from './vue/App.vue'
createApp(App).mount('#app')