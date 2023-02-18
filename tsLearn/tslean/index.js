// 引入样式
import './style/index.less';
import GameControl from './modules/GameControl';
// 这个就是实例化游戏，我们为了练习其他项目先把他关闭
const gameControl = new GameControl;
setInterval(() => {
    console.log(gameControl.direction);
}, 1000); // 每一秒打印一次,实际打印为空
