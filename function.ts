
//taking NUMBER type parameter But returning STRING
function  sum(a: number, b: number){
    return "hi there!"
}
console.log(sum(3, 2));


//to get rid of such problem


//add RETURN TYPE in a function
function deduct(a: number, b: number): number{
    return a-b;
}
console.log(`Deduction = `,deduct(4, 1));


//RETURN TYPE with ARROW function
let greet = (s: string): string =>{
    return(`${s} take greeting`);
}
console.log(greet("Hello"));


//when function has NO RETURN TYPE
function error(msg: string): void{
    console.log(`Error: ${msg}`);
}
error("Exception error");

function addTwo(n: number){
    return n+2;
}
console.log(addTwo(3));


//WITHOUT RETURN TYPE

//normal function
function signUp(name: string, id: number){
    console.log(`Name : ${name} ----ID: ${id}`);
}
signUp("Jahid", 231);


//with arrow function
let login = (user: string, isPaid: boolean)=>{
    if(isPaid){
        return true;
    }
    return false;
}

console.log(login("Rasel", true));


//with default parameter
function group(grpName: string, isActive: boolean = true){
    console.log(`${grpName} is working.`);
}
group("Geology");


