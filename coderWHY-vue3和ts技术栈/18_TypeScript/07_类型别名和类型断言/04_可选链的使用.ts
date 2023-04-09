type Person = {
    name: string,
    friend?: {
        name: string,
        age?: number
    }
}
const info: Person = {
    name: 'chen',
    friend: {
        name: 'kobe',
    }
}
// 我想拿到info.name，必选
info.name
// 我取出friend属性，以及friend的name，取出是undefined，再取undefined.name
// 那我认为指定有friend属性使用感叹号
info.friend!.name
// 但是以上代码是不安全的，就可以可选链?.
// 以下代码遇到age返回undefined,可选链在age短路了返回undefined
console.log(info.friend?.age);


