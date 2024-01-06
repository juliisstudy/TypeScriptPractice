"use strict";
// a tuple is a typed array with a pre-define length and types for each index
let tuple;
tuple = [5, false, 'code'];
const tupleOnly = [5, true, 'code'];
//named tuple allow us to provide context for our values at each index
const graph = [55.2, 41.3];
//destructuring tuple
const graphs = [55.2, 41.3];
const [x, y] = graph;
let y = undefined;
console.log(typeof y);
let z = null;
console.log(typeof z);
//array
const names = [];
names.push("ju");
console.log(names);
//readonly can prevent arrays from being changed
const namesOne = ["ku"];
//namesOne.push("jack"); //error
//type Inference
const numbers = [1, 2, 3];
numbers.push(4);
let head = numbers[0];
console.log(head);
//object types
const car = {
    type: "toyota",
    model: "corolla",
    year: 2009
};
console.log(car);
// optional property
const carOne = {
    type: "toyota"
};
//index signatures can be used for objects without a defined list of properties.
const nameAgeMap = {};
nameAgeMap.jack = 25;
//Enums come in two flavors string and numeric 
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NotFound);
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const carTwo = {
    year: carYear,
    type: carType,
    model: carModel
};
const rectangle = {
    height: 20,
    width: 10
};
const coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
//union types would be string or number
function printStatusCode(code) {
    console.log(`code is ${code}`);
}
printStatusCode(404);
printStatusCode('404');
function getTime() {
    return new Date().getTime();
}
//void return type
function printHello() {
    console.log('h');
}
function multiply(a, b) {
    return a * b;
}
//optional parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
//default parameters
function pow(value, exponent = 10) {
    return value ** exponent;
}
function add(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
//casting with as
let x = ' hello';
console.log(x.length);
//using <> works the same as casting with as
let x = 'hello';
console.log(x.length);
//Members of a class(properties&methods) are types using type annotations 
class Person {
}
const person = new Person();
person.name = "ju";
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("ju");
//readonly 
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
//abstract class 
class Ploygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle extends Ploygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
}
let pointPart = {};
pointPart.x = 10;
let myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000
};
//record is shortcut to defining an object tyoe with a specific key type and value
const nameAgeMap = {
    'Alice': 21
};
const bob = {
    name: 'Bob'
};
const bob = {
    name: 'Bob'
};
const value = true;
const point = {
    x: 10,
    y: 20
};
const point = {
    x: 10,
    y: 20
};
const person = {
    name: "ju",
    age: 10
};
let value = null;
value = 'hello';
value = undefined;
