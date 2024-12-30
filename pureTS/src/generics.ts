
//ANY might take number as parameter and return string, that is inconsistent
function anyTest(n: any): any{
    return `${n} is a string now`;
}
console.log(anyTest(23));
console.log(typeof anyTest(23));


//GENERICS mitigates the inconsistency of ANY data type


function identity<Type>(val: Type): Type{
    return val;
}
console.log(identity("Identity generics"));
console.log(identity(4));



interface Bottle{
    brand: string;
    type: number;
}
function printBottle<Bottle>(obj: Bottle): void{
    console.dir(obj);
}
printBottle({brand: "pepsi", type: "cocacola"});



//GENERICS in array

function arrayFunc<Type extends number> (arr: Type[]): Type[]{
    return arr.filter( (e)=> e%2 === 0 );
}
console.log(arrayFunc([1 ,2 ,3, 4, 5, 6]));


//MULTIPLE GENERICS type
interface Database{
    connection: string,
    username: string,
    password: string,
}

function anotherFunction<U, T extends Database> (one: U, two: T): object {
    return{
        one,
        two
    }
}
anotherFunction("2", {
    connection: "mongodb",
    username: "mahdi",
    password: 'asd'
});


