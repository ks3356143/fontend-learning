// 定义类-什么简单定义什么
class Food {
    // 定义一个属性表示食物所对应的元素
    element: HTMLElement;
    constructor() {
        // 获取页面中food元素并将其赋值给element
        this.element = document.getElementById('food')! // 有可能为null哟，但这个元素不可能为空所以加上“!”
    }

    // 定义一个获取食物x轴坐标的方法
    // get方法主要是对private进行处理，但是这里我们简单写个属性用get也可以
    get X() {
        return this.element.offsetLeft
    }

    // 定义一个获取食物Y轴坐标方法
    get Y() {
        return this.element.offsetTop
    }

    // 修改食物位置的方法
    change() {
        // 生成随机位置
        // 食物位置范围(0,290)，10px为一个单位
        // 蛇移动一次就是一格，一格的大小就是10px，所以要求食物坐标是10px的倍数
        // Math.random()是令系统随机选取大于等于0.0且小于1.0的伪随机double值,Math.round四舍五入取整
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = top + 'px';
        this.element.style.top = left + 'px';
    }
}

// 暴露出去
export default Food;