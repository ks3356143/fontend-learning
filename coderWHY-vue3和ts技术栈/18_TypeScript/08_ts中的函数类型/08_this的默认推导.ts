function eating(this: { name: string }) {
    console.log(this.name + '吃');
}

const info = {
    name: 'chen',
    eating: eating
}

eating.bind(info)()



