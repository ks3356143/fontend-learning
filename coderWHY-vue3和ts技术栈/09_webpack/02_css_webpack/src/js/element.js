import '../css/style.css'
import '../css/title.less'

const divEl = document.createElement('div')
divEl.className = "title"
divEl.innerHTML = '你好，邓跃林!'

document.body.insertAdjacentElement('beforeend',divEl)
document.body.appendChild(divEl)