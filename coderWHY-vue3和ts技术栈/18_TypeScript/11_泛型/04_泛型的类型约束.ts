interface ILength {
    length: number
}

function getLength<T extends ILength>(arg: T) {
    return arg.length
}

getLength('abc')
getLength([1, 2, 3])
getLength({ name: 1, age: 12,length:100 }) 
//怎么理解约束，我传入的类型（当然）
// 当然这里是类型推导，首先我是xxx类型，我这个类型extends一个接口，所以我还必须里面有个length属性
