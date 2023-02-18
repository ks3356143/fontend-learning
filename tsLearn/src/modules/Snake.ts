// 重点的业务逻辑都是蛇的逻辑
class Snake {
    // 表示蛇头
    head: HTMLElement
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection // HTMLCollection是什么呢，就是元素的数组！
    // 获取蛇的容器
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement// querySelector()函数只取一个元素
        // querySelectorAll 可以获取列表！重点，和querySelector区别
        this.bodies = document.getElementById('snake')?.getElementsByTagName('div') as HTMLCollection //?表示存在则执行
    }

    // 蛇坐标就是蛇头坐标
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    // 思路：先写个简单版本然后扩展,以下蛇头坐标
    set X(value: number) {
        // 如果新值和旧值相同，则直接返回不修改
        if (this.X === value) { return }
        // X值超过合法范围0-290
        if (value < 0 || value > 290) {
            // 蛇撞墙了！抛出一个异常
            throw new Error('蛇撞墙啦！')
        }
        // 修改x时候，是在修改水平坐标时候，蛇在向左移动时候不能往右走，判断蛇头坐标和身体第二坐标是否一样，一样则发生掉头（先判断有没有第二节）
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果新值value大于旧值X，则说明蛇在向右走，此时发生调用，应该使蛇继续左走
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }

    set Y(value: number) {
        if (this.Y === value) { return }
        if (value < 0 || value > 290) {
            // 蛇撞墙了！抛出一个异常
            throw new Error('蛇撞墙啦！')
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            // 如果新值value大于旧值X，则说明蛇在向右走，此时发生调用，应该使蛇继续左走
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        // 检查是否撞自己了
        this.checkHeadBody()
    }

    // 蛇增加身体一个方法，就是增加一个div
    addBody() {
        // 向element添加一个div,使用insertAdjacentHTML方法加上HTML代码，注意无论第一个参数是'beforeend'还是'beforestart'都是自己！！！
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

    moveBody() {
        // 将后面的身体设置为前边身体位置-一截一截修改位置
        // 遍历获取所有的身体
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体位置
            let X = (<HTMLElement>this.bodies[i - 1]).offsetLeft;
            let Y = (<HTMLElement>this.bodies[i - 1]).offsetTop;
            // 将这个值设置到当前身体
            (this.bodies[i] as HTMLElement).style.left = X + 'px'; // 类型断言
            (this.bodies[i] as HTMLElement).style.top = Y + 'px'; // 类型断言
        }
    }

    checkHeadBody() {
        // 获取所有的身体，然后检查其是否和蛇头坐标发生重叠，重叠则throw new Error（~！）
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入这里说明蛇头撞到身体
                throw new Error('撞到自己了！')
            }
        }
    }


}

export default Snake;