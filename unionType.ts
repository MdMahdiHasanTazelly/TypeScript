
//x can ne string or number
let x: number | string = 3;
x = "Hello";



//with custom data type
type User = {
    name: string;
    id: number;
};

type Admin = {
    username: string;
    id: number;
}

let mahdi: User | Admin = {username: "Mahdi", id: 23};
//can be reassigning as User type
mahdi = {name: "mh", id: 43};



//union type in array

//this could be an array of number or string as a whole
// [1, 2 3] or ["apple", "code"] these are OK
//[1 , "hi"] this will encounter an error
let arr: number[] | string [] = [];
arr = [1 ,3];
arr = ["hello", "hi"];

let mixedArr: (string | number)[] = [1, 2, "code"];



//union in REAL LIFE SCENARIO
//vehicle can be of 3 types
let vehicle: "1wheeler" | "2wheeler" | "3wheeler";



//TYPE NARROWING of union type

function getDbId(id: string | number): void{
    if(typeof id === 'string'){
        console.log(`${id} is a STRING!`);
        return;
    }
    console.log(`${id} is a NUMBER.`);
}
