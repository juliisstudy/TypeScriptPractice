let username:String = "ju"
console.log(username);
let album:string|number;

let a:number =12
let b:number=6
let c:number= 2

console.log(a/b)

const sum = (a:number,b:number)=>{
    return a + b
}
let re:RegExp = /\w+/g

let stringArr = ['one','two','three']
let object = ['string',200]
let mix = ['string',200,true]

stringArr[0] = 'Lisa'
stringArr.push('James')
stringArr.unshift('Jason')

let names:string[] = []
names.push('one')

//tuple
let myTuple:[string,number,boolean] = ['one',1,true]
//objects
let myObj:object
myObj=[]
myObj ={}

type Artist ={
    name:string,
    active?:boolean,
    projects:(string|number)[]
}

let vinci :Artist = {
    name:'Vinci',
    active:false,
    projects:["Mona Lisa","Last Supper"]
}
const greetArtist = (artist:Artist) =>{
    return `Hello ${artist.name}`
}

console.log(greetArtist(vinci))

enum Grade {
    U =1,
    D,
    C,
    B,
    A,
}

type stringOrNum = string|number
type stringOrNumberArray = (string|number)[]

type UserId = stringOrNum
let userName:'juli'|'joey'
userName = 'joey'

const add = (a:number,b:number):number=>{
    return a+b
}
const logMsg = (message:any):void=>{
    console.log(message)
}
let subtract = function(c:number,d:number):number{
    return c-d
}

//alias would not work for default value
type mathFunction = (a:number,b:number)=>number

let multiply:mathFunction = function(c,d){
    return c*d
}
logMsg(multiply(2,3))

interface mathFunctionInt {
    (a:number,b:number):number
}

//optional parameters
const addAll=(a:number,b:number,c?:number):number=>{
    if(typeof c!=='undefined'){
        return a+b+c
    }
    return a+b
}

//rest parameters
const total = (a:number,...nums:number[]):number =>{
    return a+nums.reduce((prev,curr)=>prev + curr)
}

logMsg(total(1,2,3,4))

const createError = (errMsg:string):never=>{
    throw new Error(errMsg)
}

const infinite = ()=>{
    let i:number =1
    while(true){
        i++
        if(i>100)break
    }
}
//custom type guard
const isNumber = (value:any):boolean =>{
    return typeof value ==='number' ?true:false
}
const numberOrString = (value:number | string): string =>{
    if(typeof value === 'string' ) return 'string'
    if(isNumber(value)) return 'number'
    return createError('This should never happen!')
}
