// this可以被推导出来的,绑定的info对象是ts推导出来的
const info = {
    name: 'chen',
    eating() {
        console.log(this.name + '吃');
    }
}
info.eating()
export {} 

