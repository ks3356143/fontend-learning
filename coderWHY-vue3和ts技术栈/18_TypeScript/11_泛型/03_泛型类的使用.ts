class Point<T> {
    x: T
    y: T
    z: T
    constructor(x: T, y: T, z?: T) {
        this.x = x
        this.y = y
        this.z = z as T
    }
}

const p = new Point('1.33.2', '22.3.3', '14.12.3')

const names: Array<string> = ['1.2', '5.3', '9.1']