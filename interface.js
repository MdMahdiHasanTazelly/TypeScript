;
var user = {
    name: "Mahdi",
    email: "m@gmail.com",
    greet: function () {
        console.log("Hello ".concat(this.name));
    }
};
console.log("Name: ".concat(user.name, "   ").concat(user.email));
user.greet();
var admin = {
    name: "Tazelly",
    age: 34,
    email: 't@gmail.com',
    greet: function () {
        console.log("Hello ".concat(this.name));
    },
    permission: ['read', 'write', 'update'],
};
console.log("Name: ".concat(admin.name, "  age: ").concat(admin.age, "   email: ").concat(admin.email));
admin.greet();
