class Person {
    private _name: string
    constructor(_name: string) {
        this._name = _name
    }
    // 访问器
    set name(name: string) {
        this._name = name
    }
    get name() {
        return this._name
    }
}

let p1 = new Person('chen')
p1.name = '123'
console.log(p1.name);