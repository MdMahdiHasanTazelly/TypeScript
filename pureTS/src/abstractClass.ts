

abstract class TakePhoto{
    constructor(
        cameraMode: string,
        filter: string,
    ){}
    abstract getClick(): void;
    getReel(): void{
        console.log(`reel is sharing`);
    }
}

class Instagram extends TakePhoto{
    constructor(
        cameraMode: string,
        filter: string,
        burst: number
    ){
        super(cameraMode, filter)
    }
    getClick(): void {
        console.log(`camera is clicked`);
    }
    //method overriding (run time pollymorphism)
    getReel(): void {
        console.log(`Instagram reel`);
    }
}

let obj = new Instagram("test", "test", 4);
obj.getReel();
obj.getClick();