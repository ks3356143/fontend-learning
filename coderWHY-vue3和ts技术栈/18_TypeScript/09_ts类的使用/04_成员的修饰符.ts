class Person {
    private name: string = 'chen'
    private age: number = 18
    private logOut() {
        console.log('我是私有函数');
    }
    getName() {
        return this.name
    }
    setName(newName: string) {
        this.name = newName
    }
}

let p = new Person()
console.log(p.getName());