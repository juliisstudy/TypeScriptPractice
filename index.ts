
// a tuple is a typed array with a pre-define length and types for each index
let tuple:[number,boolean,string];
tuple =[5,false,'code'];

const tupleOnly:readonly [number,boolean,string]=[5,true,'code'];

//named tuple allow us to provide context for our values at each index
const graph: [x:number,y:number] =[55.2,41.3];

//destructuring tuple
const graphs:[number,number] =[55.2,41.3];
const [x,y] = graph;

let y:undefined = undefined;
console.log(typeof y);

let z:null = null;
console.log(typeof z);

//array
const names:string[]=[];
names.push("ju");
console.log(names);

//readonly can prevent arrays from being changed
const namesOne:readonly string[]=["ku"];
//namesOne.push("jack"); //error

//type Inference
const numbers = [1,2,3];
numbers.push(4);
let head: number = numbers[0];
console.log(head);

//object types

const car:{type:string,model:string,year:number} ={
    type:"toyota",
    model:"corolla",
    year:2009
};
console.log(car);

// optional property
const carOne:{type:string,mileage?:number} ={
    type:"toyota"
};

//index signatures can be used for objects without a defined list of properties.
const nameAgeMap:{[index:string]:number} ={};
nameAgeMap.jack =25;

//Enums come in two flavors string and numeric 

enum CardinalDirections {
    North=1,
    East,
    South,
    West
}
console.log(CardinalDirections.North);

enum StatusCode {
    NotFound =404,
    Success =200,
    Accepted = 202,
    BadRequest =400
}
console.log(StatusCode.NotFound);

//type aliase 
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car ={
    year:CarYear,
    type:CarType,
    model:CarModel
}
const carYear: CarYear =2001;
const carType: CarType ="Toyota"
const carModel:CarModel="Corolla"
const carTwo:Car ={
    year:carYear,
    type:carType,
    model:carModel
}

//Interfaces only apply to objext Type
interface Rectangle{
    height:number,
    width:number
}
const rectangle:Rectangle={
    height:20,
    width:10
}

//interface extend
interface ColoredRectangle extends Rectangle{
    color:string
}

const coloredRectangle:ColoredRectangle ={
    height:20,
    width:10,
    color:"red"
}

//union types would be string or number
function printStatusCode(code:string|number){
    console.log(`code is ${code}`)
}
printStatusCode(404);
printStatusCode('404');

function getTime():number{
    return new Date().getTime();
}
//void return type
 function printHello():void{
    console.log('h');
 }

 function multiply(a:number,b:number){
    return a*b;
 }

 //optional parameters
 function add(a:number, b:number,c?:number){
    return a+b+(c||0);
 }

 //default parameters
 function pow(value:number,exponent:number =10){
    return value**exponent;
 }

 