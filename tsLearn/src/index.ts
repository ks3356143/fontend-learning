// 引入样式
import './style/index.less'
import GameControl from './modules/GameControl'

// 为了知道储存用户值没有，定义一个变量
const gameControl = new GameControl

setInterval(()=>{
    console.log(gameControl.direction); 
},1000) // 每一秒打印一次,实际打印为空




