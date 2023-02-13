// 重点的业务逻辑都是蛇的逻辑
class Snake {
    // 表示蛇头
    head: HTMLElement
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection // HTMLCollection是什么呢，就是元素的数组！
    // 获取蛇的容器
    element:HTMLElement
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
    set X(value:number){
        this.head.style.left = value + 'px'
    }
    set Y(value:number){
        this.head.style.top = value + 'px'
    }

    // 蛇增加身体一个方法，就是增加一个div
    addBody(){
        // 向element添加一个div,使用insertAdjacentHTML方法加上HTML代码，注意无论第一个参数是'beforeend'还是'beforestart'都是自己！！！
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }
    

}

export default Snake;