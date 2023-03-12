import '../css/style.css'
import '../css/img-sl.less'
import ma from '../img/ma.png'
import '../css/alifont.css'

const divEl = document.createElement('div')
divEl.className = "title"
divEl.innerHTML = '你好，邓跃林!'

// 设置背景图片
const bgDivEle = document.createElement('div')
bgDivEle.className = 'image-bg'
bgDivEle.style.width = '200px'
bgDivEle.style.height = '200px'

// img标签形式
const imgEl = document.createElement('img')
imgEl.src = ma

// 简单i元素
const iEl = document.createElement('i')
iEl.innerText = '你好，陈俊亦'
iEl.className = "hello1"

document.body.appendChild(divEl)
document.body.appendChild(bgDivEle)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)

console.log("看我element.js热替换了吗？！");