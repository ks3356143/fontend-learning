import '../css/style.css'

const divEl = document.createElement('div')
divEl.className = "title"
divEl.innerHTML = '你好，邓跃林!'

document.body.insertAdjacentElement('beforeend',divEl)
document.body.appendChild(divEl)