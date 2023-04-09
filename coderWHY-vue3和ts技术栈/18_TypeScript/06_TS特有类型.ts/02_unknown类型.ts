function foo() {
    return 'abc'
}

function bar() {
    return 123
}

let flag = false
let result: unknown //最好不使用any

if (flag) {
    result = foo()
} else {
    result = bar()
}

console.log(result);
