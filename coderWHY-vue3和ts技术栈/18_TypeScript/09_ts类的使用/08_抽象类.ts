function makeArea(shape: any) {
    return shape.getArea()
}

//写上抽象父类
abstract class Shape {
    abstract getArea():void
}

class Rectangle extends Shape {
    private width: number
    private height: number
    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }
    getArea() {
        return this.width * this.height
    }
}
class Circle extends Shape {
    private r: number
    constructor(r: number) {
        super()
        this.r = r
    }
    getArea() {
        return this.r * this.r * 3.14
    }
}

const rectangle = new Rectangle(30, 40)
const circle = new Circle(10)
console.log(makeArea(rectangle));
console.log(makeArea(circle));