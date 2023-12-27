let firstName:string="juli";


//any is a type that disables type checking and effectively allows all types to be used.
let v:any = true;
v = "string";
Math.round(v);


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
