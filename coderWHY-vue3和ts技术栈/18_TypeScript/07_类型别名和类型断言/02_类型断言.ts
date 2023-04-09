const el: HTMLImageElement = document.getElementById('why')! as HTMLImageElement
el.src = <string>"url地址"

class Person {

}

class Student extends Person {
    study() {
        console.log('正在学习');
    }
}
function sayHello(p: Person) {
    (<Student>p).study()
}
const stu = new Student()
sayHello(stu)

const message = "123"
let n1: number = (message as unknown) as number
console.log(n1);
