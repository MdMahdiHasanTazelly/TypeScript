

//NUMERIC enum  ---->  automatically assigns numbers
enum Direction{
    //assigns 0
    NORTH,
    //assigns 1
    SOUTH,
    //assigns 2
    EAST,  
    //assigns 3
    WEST,
}
console.log(Direction.SOUTH);

//ENUM REVERSE MAPPING
console.log(Direction[2]);


//Enum can have 2 data types: STRING, NUMBER

// type User = {
//     name: string;
//     id: number;
// }
// let user: User = {name: "mahdi", id: 2};
// enum bool{
//     one = user;
//     two = true;
// }


//string enum

enum Color{
    red = "Red",
    green = "Green",
    blue = "Blue",
}

let color: Color = Color.blue;
console.log(color);



//heterogenious enum
enum MixedEnum{
    yes = 1,
    no = "No",
}
console.log(MixedEnum.no);
//ENUM REVERSE MAPPING
console.log(MixedEnum[1]);
//enum reverse mapping can't be done for STRING ENUM
//console.log(MixedEnum["No"]);
