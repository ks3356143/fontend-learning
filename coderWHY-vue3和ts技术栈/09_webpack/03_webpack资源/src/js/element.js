import '../css/style.css'
import '../css/title.less'
import '../css/image.css'

const divEl = document.createElement('div')
divEl.className = "title"
divEl.innerHTML = '你好，邓跃林!'

const bgDiveEl = document.createElement('div')
bgDiveEl.className = 'image-bg'

document.body.appendChild(divEl)
document.body.appendChild(bgDiveEl)