enum Direction {
    LEFT, RIGHT, BOTTOM, TOP=100
}
// 用的最多的，某些函数
function turnDirection(direction: Direction) {
    console.log(direction); //打印的数字
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.BOTTOM)
turnDirection(Direction.TOP)