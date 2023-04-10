function add(num1: number, num2: string): string
function add(num1: string, num2: number, num3: number): string
function add(num1: any, num2: any) {
    return num1 + num2
}
const result = add(20, '30')
console.log(result); //从上往下一次匹配重载函数！

// const result1 = add({ name: 'chen' }, '20') 报错！