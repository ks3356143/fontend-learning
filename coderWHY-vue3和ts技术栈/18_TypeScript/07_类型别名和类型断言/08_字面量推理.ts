const info = {
    name: 'chen',
    age: 18
}
type Method = 'GET' | 'POST'
function request(url: string, method: Method) { }
//~~~~~~~~~~解决方案~~~~~~~~~~
// type Request = {
//     url: string,
//     method: Method
// }
const options = {
    url: "www.baidu.com",
    method: 'POST' as Method
}
//~~~~~~~~~~解决方案~~~~~~~~~~
request(options.url, options.method)
//为什么报错，因为options中method属性推导为string了
// 而在request函数要求第二个参数传入的是Method类型，所以类型不正确
export { }