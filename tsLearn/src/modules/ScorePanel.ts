// 积分牌类创建
class ScorePanel {
    // score和level记录分数和等级
    score = 0; //默认值为0，自动变成number,注意这里定义和上面定义是private区别
    level = 1;
    // 我们是不是在span里面
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 设置一个变量限制等级
    maxLevel: number
    // 设置一个变量，表示多少分升级
    upScore: number
    constructor(maxLevel: number = 10,upScore: number=10) { //默认值设置
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    // 修改score和level
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''; // 注意这里写法 ++ 在变量前面直接可以自增，innerHTML是string类型哦
        // 满足一定条件升级
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    levelUp() {
        // 等级设置上限
        if (this.level < this.maxLevel) { this.levelEle.innerHTML = ++this.level + ''; } // 注意10这里降低可扩展性，尽量避免使用字面量
    }
}

// 暴露出去
export default ScorePanel;