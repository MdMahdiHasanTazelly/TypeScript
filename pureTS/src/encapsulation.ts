

class Vehicle{
    //protected is accessible from sub-class
    private wheel: number;
    public name: string;
    //private isn't accessible from even the sub-class
    protected cover: boolean = true;
    //sets access modifier public by default
    seat: number;
    constructor(name: string, wheel: number, seat: number){
        this.name = name;
        this.wheel = wheel;
        this.seat = seat;
    }
    get wheelNo(): number{
        return this.wheel;
    }
    set wheelNo(n: number){
        this.wheel = n;
    }

    get seatNo(): number{
        return this.seat;
    }
}


let vehi = new Vehicle("Toyota", 4, 4);
console.log(`${vehi.name} ---- ${vehi.wheelNo} ------- ${vehi.seatNo}`);

//invoking setter method
vehi.wheelNo = 8;
console.log(`${vehi.name} ---- ${vehi.wheelNo} ---- ${vehi.seatNo}`);



class Bike extends Vehicle{
    // super(name: string, seat: number, wheel: number){
    //     this.name = name;
    //     this.seat = seat;
    //     this.wheel = wheel;
    // }

    changeCover(){
        //protected variables can be accessible from sub-class
        this.cover = true;
        console.log(`cover is changed!`);
    }
}

let bike = new Bike("MT15", 2, 2);

console.log(`${bike.name} ----${bike.seatNo} --- ${bike.wheelNo}`);

bike.changeCover();

