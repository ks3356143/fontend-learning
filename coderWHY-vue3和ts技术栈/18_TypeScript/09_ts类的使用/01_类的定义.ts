class Persion {
    name: string
    age: number
    constructor(name: string, age: number) { //默认执行
        this.name = name
        this.age = age
    }
    eating() {
        console.log(this.name + '吃');
    }
}
new Persion('chen', 18)