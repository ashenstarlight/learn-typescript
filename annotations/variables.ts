let apples: number = 5
// let speed: string = String(45);
let speed: number = 60

let hasName: boolean = true
let nothingMuch:null = null
let nothing:undefined = undefined

// built-in objects
let now:Date = new Date();

// array
let colors: string[] = ['red', 'green','blue']
let myNumbers: number[] = [1,2,3,4,5,6]
let truths: boolean[] = [true, false, false]

// classes
class Car {

}
let car: Car = new Car()

// obejct literal
let point:{x: number; y: number} = {
    x: 10,
    y: 20
}

// functions
const logNumber: (i: number) => void = (i: number) => { // real nasty syntax bro
    console.log(i);   
}