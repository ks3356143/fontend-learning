function sum<T>(num1: T) {
    return num1
}
sum<number>(20)
// 2.方式二：类型推导
sum("123")
//多个类型参数
function foo<T, N>(arg1: T, arg2: N) {
    return arg1
}
foo<number, string>(20, '123')