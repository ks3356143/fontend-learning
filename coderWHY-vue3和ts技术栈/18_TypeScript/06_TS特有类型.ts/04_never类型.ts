function foo() {
    while (1) {

    }
}
function bar() {
    throw new Error()
}
// 什么东西不返回，都不能返回void、undefined

// 应用场景
function handleMessage(message: string | number | boolean) {
    switch (typeof message) {
        case 'string':
            console.log("字符串方式处理message");
            break
        case 'number':
            console.log('number类型处理message');
            break
    }
}

handleMessage(123)  //不报错
handleMessage('123') //不报错
// 传boolean类型报错
handleMessage(true)

// undefined类型可以赋值吗
let un1:undefined = undefined