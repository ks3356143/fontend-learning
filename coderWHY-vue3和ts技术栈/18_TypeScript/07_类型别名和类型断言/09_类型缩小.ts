// 1、typeof的类型缩小
type ID = number | string
function printId(id: ID) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}

// 2、平等类型缩小===/!===/swich
type Direction = 'left' | 'right' | 'top' | 'bottom'
function printDirection(direction: Direction) {
    switch (direction) {
        case 'left' || 'right':
            direction
    }
}

// 3、instanceof
function printTime(time: string | Date) {
    if (time instanceof Date) {
        time.toUTCString()
    } else {
        console.log(time);
    }
}

class Student {
    studing() {
        console.log('正在学习');
    }
}
class Teacher {
    teaching() {
        console.log('正在教学');
    }
}
function work(p: Student | Teacher) {
    // 两个都有可能，那就要缩小了，才能调用方法
    if (p instanceof Student) {
        p.studing()
    } else {
        p.teaching()
    }
}

// 4、in
type Fish = {
    swimming: () => void
}
type Dog = {
    running: () => void
}
function walk(animal: Dog | Fish) {
    if ('swimming' in animal) {
        animal.swimming()
    }
}
const fish: Fish = {
    swimming() {
        console.log('鱼儿游泳');
    }
}

walk(fish)
