class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log('吃');
    }
}
class Studen extends Person {
    sno: number = 0
    sb: number
    constructor(name: string, age: number, sb: number) {
        super(name, age) //super等于父类constructor函数
        this.sb = sb //务必添加专有初始化类属性，不然无异议，还不如不写子类的constructor
    }
    eating() {
        super.eating()  //super不加括号不表示constructor，而表示父类
        console.log('子类独有eating的打印功能');
    }
    studing() {
        console.log('学习！');
    }
    
}
class Teacher extends Person {
    title: string = ''
    teaching() {
        console.log('教学');
    }
}
const student1 = new Studen('chen', 18, 90)
console.log(student1.name);
const t1 = new Teacher('codeWhy', 20)

export { }