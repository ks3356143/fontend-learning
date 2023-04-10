function foo() { }
function bar(fn: () => void) { fn() }
bar(foo)

const add: (num1: number, num2: number) => void = (num1: number, num2: number) => { 
    return num1 + num2 
}

