
interface User {
    name: string,
    age?: number,
    readonly email: string,
    greet(): void,
};
let user: User = {
    name: "Mahdi", 
    email: "m@gmail.com", 
    greet() {
        console.log(`Hello ${this.name}`);
    }
}    

console.log(`Name: ${user.name}   ${user.email}`);
user.greet();


interface Admin extends User{
    permission: string[];
}

const admin: Admin = {
    name: "Tazelly",
    age: 34,
    email: 't@gmail.com',
    greet(){
        console.log(`Hello ${this.name}`);
    },
    permission: ['read', 'write', 'update'],
}
console.log(`Name: ${admin.name}  age: ${admin.age}   email: ${admin.email}`);
admin.greet();