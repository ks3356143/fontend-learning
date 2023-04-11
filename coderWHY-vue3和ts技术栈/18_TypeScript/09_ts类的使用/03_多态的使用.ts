class Animal {
    action() {
        console.log('跑');
    }
}

class Dog extends Animal {
    action(): void {
        console.log('狗在跑');
    }
}

class Fish extends Animal {
    action(): void {
        console.log('鱼在游');
    }
}

function makeActions(animals: Animal[]) {
    animals.forEach(animal => {
        animal.action()
    })
}

makeActions([new Dog(), new Fish(),new Animal()])