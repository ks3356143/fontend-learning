// 游戏控制器类，控制其他所有类
// 引入其他类
import Snake from "./Snake"
import ScorePanel from "./ScorePanel"
import Food from "./Food"

class GameControl {
    // 定义三个属性
    // 蛇
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init()
    }
    // 游戏初始化方法，调用后游戏就开始
    init() {
        // 绑定键盘按下的事件,addEventListener很重要
        document.addEventListener('keydown',this.keyDownHandler) 

    }
    // 不要在addEventListener里面传函数，在外面定义这样可维护性强
    keyDownHandler(event:KeyboardEvent){ //叫句柄函数,新类型KeyboartEvent类型，键盘事件
        console.log(<string>event.key);  // 获取按键名字
        
    }

}

export default GameControl;