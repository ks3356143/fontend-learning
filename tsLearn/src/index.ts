// 引入样式
import './style/index.less'
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'

// 测试代码
const food = new Food()
console.log(food.X, food.Y);
food.change()
console.log(food.X, food.Y);
const scorePanel = new ScorePanel(100,2)

for (let i = 0; i < 10; i++) {
    scorePanel.addScore();
}





