type ISwim = {
    swimming: () => void
}
type IEat = {
    eating: () => void
}
class Animal {

}

class Fish extends Animal implements ISwim, IEat {
    swimming() { }
    eating() { }
}