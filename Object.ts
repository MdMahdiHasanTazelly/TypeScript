//type aliases

type Car = {
    name: string;
    wheel: number;
}

function createCar (car: Car): Car {
    return {name: "", wheel: 0};
}


type User = {
    //readonly dneotes this attribute CAN'T BE MODIFIED
    readonly _id: number;
    name: string;
    email: string;
    isActive: boolean;
    // "?" marked this attribute as OPTIONAL
    creditCard?: number;
};

let user: User = {
    _id: 321,
    name:"Hasib",
    email: 'h@gmail.com',
    isActive: false,
};


//new type by adding more types altogether
type cardDate = {
    cardDate: string;
}
type cardNo = {
    cardNo: number;
}
//creation of a type by adding 3 types
type cardDetails = cardDate & cardNo & {
    cvv: number;
}


