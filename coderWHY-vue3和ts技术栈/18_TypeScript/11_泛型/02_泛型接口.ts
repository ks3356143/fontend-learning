interface IPerson<T> {
    name: T
    age: number
}

const p1: IPerson<string> = {
    name: 'chen',
    age: 18
}