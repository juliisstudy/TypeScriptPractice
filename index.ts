
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

 function add(a:number,b:number,...rest:number[]){
    return a+b+rest.reduce((p,c)=>p+c,0);
 }

 //casting with as
 let x:unknown =' hello';
 console.log((x as string).length);

 //using <> works the same as casting with as
 let x:unknown = 'hello';
 console.log((<string>x).length);

 //Members of a class(properties&methods) are types using type annotations 
 class Person{
    name:string;
 }
 const person = new Person();
 person.name = "ju"

class Person {
    private name:string;
    public constructor(name:string){
        this.name = name;
    }
    public getName():string{
        return this.name;
    }
}

const person = new Person("ju");

//readonly 
class Person {
    private readonly name:string;
    public constructor(name:string){
        this.name = name;
    }
    public getName():string{
        return this.name;
    }
}

interface Shape{
    getArea:()=>number;
}
class Rectangle implements Shape{
    public constructor(protected readonly width:number,protected readonly height:number){

    }
    public getArea():number{
        return this.width*this.height;
    }
}

//abstract class 
abstract class Ploygon{
    public abstract getArea():number;
    public toString():string{
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle extends Ploygon{
    public constructor(protected readonly width:number,protected readonly height:number){
        super();
    }
    public getArea():number{
        return this.width*this.height;
    }
}

function createPair<S,T>(v1:s,v2:T):[S,T]{
    return [v1,v2];
}
console.log(createPair<string,number>('hello',42));

class NamedValue<T>{
    private _value:T|undefined;
    constructor(private name:string){

    }
    public setValue(value:T){
        this._value =value;
    }

}
//Partial changes all the properties in an object to be optional
interface Point{
    x:number;
    y:number;
}

let pointPart:Partial<Point>={};
pointPart.x=10;

//Required changes all the properties in an object to be required
interface Car {
    make:string;
    model:string;
    mileage?:number;
}
let myCar:Required<Car> ={
    make:'Ford',
    model:'Focus',
    mileage:12000
};

//record is shortcut to defining an object tyoe with a specific key type and value
const nameAgeMap : Record<string,number>={
    'Alice':21
};

// Record<string,number>  = {[key:string]:number}

//Omit removes keys from an object type
interface Person {
    name:string;
    age:number;
    location?:string;
}

const bob:Omit<Person,'age'|'location'>={
    name:'Bob'
}

//Pick removes all but the specified keys from an object Type
interface Person {
    name:string;
    age:number;
    location?:string;
}

const bob:Pick<Person,'name'>={
    name:'Bob'
};

//Exclude remove types from a union
type Primitive = string |number|boolean;
const value:Exclude<Primitive,string>=true;

//ReturnType extracts the return types of a function type
type PointGenerator =()=>{x:number;y:number;};
const point:ReturnType<PointGenerator>={
    x:10,
    y:20
};

//Parameters extracts the parameter types of unction type as an array
type PointPrinter =(p:{x:number;y:number;}) =>void;
const point:Parameters<PointPrinter>[0] ={
    x:10,
    y:20
};


interface Person{
    name:string;
    age:number;
}
const person:Readonly<Person>={
    name:"ju",
    age:10
}

let value:string|undefined|null=null;
value='hello';
value=undefined;
