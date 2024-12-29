

class User{
    name: string;
    email: string;
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }    
}
const mahdi = new User("m@gmail.com", 'mahdi');
console.log(mahdi.name,"   ",mahdi.email);


class Student{
    constructor(
        public name: string, 
        public id: number
        ){
    }
}
let stu: Student = new Student("rasel", 23);
console.log(`Student: ${stu.name}    ${stu.id}`);