function getLenth(args: string): number
function getLenth(args: any[]): number
function getLenth(args: any): any {
    return args.length
}

console.log(getLenth([1, 2, 3, 4]));
console.log(getLenth('123'));