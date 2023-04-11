class Person {
    //1.只读属性只能在constructor赋值
    //2.只读属性是对象，对象里面的属性是可以修改的，浅层readonly
    name: string
    readonly friend?: Person
    constructor(name: string, friend?: Person) {
        this.name = name
        this.friend = friend
    }
}
const p = new Person('chen',new Person("kobe"))
console.log(p.name);
console.log(p.friend);