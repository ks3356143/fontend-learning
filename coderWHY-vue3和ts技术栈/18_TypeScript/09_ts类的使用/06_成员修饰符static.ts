class Student {
    static time: string = "20:00"
    static attend() {
        console.log('静态方法-类方法-去学习');
    }
}
console.log(Student.time); //本身类访问到
console.log(Student.attend()); //本身类访问到
