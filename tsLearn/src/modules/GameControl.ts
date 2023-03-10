// 游戏控制器类，控制其他所有类
// 引入其他类
import Snake from "./Snake"
import ScorePanel from "./ScorePanel"
import Food from "./Food"

class GameControl {
    // 定义一个按钮
    btn: HTMLElement
    // 定义三个属性
    // 蛇
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 定义一个属性，来确定下用户按键的方向
    direction: string = ''

    // 定义一个属性，记录游戏是否结束
    isLive: Boolean = true

    constructor() {
        this.btn = document.getElementById("button")!
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 10);
        this.init()
    }
    // 游戏初始化方法，调用后游戏就开始
    init() {
        // 点击按钮游戏重新开始
        this.btn.addEventListener('click', () => {
            this.isLive = true
            this.direction = ''
            this.run()
        })
        // 绑定键盘按下的事件,addEventListener很重要
        // bind()是创建一个新函数，把this绑定为这个函数的this，所以keyDownHandler的this全部表示未gameControl的实例对象
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        // 让蛇动起来
        this.run()
    }
    // 不要在addEventListener里面传函数，在外面定义这样可维护性强
    keyDownHandler(event: KeyboardEvent) { //叫句柄函数,新类型KeyboartEvent类型，键盘事件
        // console.log(<string>event.key);  // 获取按键名字
        this.direction = event.key as string
        // console.log(this); //打印出document对象，因为是document调用因为addEventListener
    }

    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // 检查蛇是否吃到了食物
            this.food.change()
            console.log('吃到了食物'); // 当我食物应该，1、食物位置变化 2、分数增加 3、蛇变长一截
            this.scorePanel.addScore()
            this.snake.addBody() // 蛇加一截，用谁找谁，面向对象的好处
        }
    }

    // 创建蛇移动方法
    run() {
        // 根据方向this.direction来使蛇位置改变，上：top减少 、下：top增加 、左：left值减少 、右： left值增加
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向修改X、Y值
        switch (this.direction) {
            case "ArrowUp" || "Up": //这个是js中case“或”方法
                // 向上移动
                Y -= 10
                break
            case "ArrowDown" || "Down":
                // 向下移动
                Y += 10
                break
            case "ArrowLeft" || "Left":
                // 向左移动
                X -= 10
                break
            case "ArrowRight" || "Right":
                // 向右移动
                X += 10
                break
        }

        // 调用checkEat查看吃到食物没有
        this.checkEat(X, Y)

        // 修改蛇的X和Y值
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            // 进入到catch弹出一个提示信息
            alert(e.message + 'GAME OVER!')
            // 将isLive设置为false
            this.isLive = false
        }

        // 开启一个定时调用,嵌套调用，随着级别高
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)

    }


}

export default GameControl;