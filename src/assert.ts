// assert   明确肯定;表现坚定;

// 当你和ts的类型判定出现分歧的时候，并且你更加坚定自己的主张的时候（认为自己判断比ts判断更准确),你愿意为你的推断负责

// HTMLElement  HTLMDivElemnt  HTMLAnchorElemnt

// DOM和BOM的内置类型就是对应的构造函数的名称
const div = document.getElementById('abc') as HTMLDivElement;

const a = <HTMLAnchorElement>document.getElementById('a') ;

// 类型断言的条件：断言的类型和a被断言的类型b需要具备包含关系(a包含b 或 b包含a)


let d1 = {a:1,b:false}  ;
(d1 as {a:number,b:boolean,c:string}).c = 'zfc'

console.log((d1 as {a:number,b:boolean,c:string}));


let d2!:number|string|123[]

(d2 as 123[] as number[]).push(1231)

let d20!:number |string |123[]
(d20 as 123[] as number[]).push(123)


// 非空断言 !

// 将联合类型中的undefined/null去除

let d3:T1 = {} as T1
type T1 = {value:number | undefined | null}
function updataD3Value(asg:T1) {
    asg.value = 1233
}

updataD3Value(d3)

d3.value!.toFixed(2)



// 
const el =document.getElementById('app')
el!.innerHTML =''


// 断言的作用是让类型更加清晰且避免类型错误同时要让代码运行的时候不能出错！！！

// 在保证运行时不报错的前提下通过断言取解决代码编写时的类型误差更加具体


// 确定赋值断言

let d5!:number;

function f() {
    d5 = 123
}
f();
d5.toFixed();

// 常量断言

// 缩小类型的范围

let d6 ={
    a:1,
    b:false,
    c:'3',
}as const


// 函数类型

// 如何定义函数类型(参数类型 + 返回值类型)

function sum(a:number,b:number):number {
         return a+b
}
const sum1 = (a:number,b:number):number=> a+b
// 函数类型和函数的逻辑分离
type SUM2 = (x:number,y:number)=>number
const sum2:SUM2 = (a,b)=>a+b
const sum3:(x:number,y:number) =>number = (a,b) => a+b


// void 表示不具备返回值
function echo(a:string,b:string):void{
    console.log(a+b);
}

const echo1 =(a:string,b:string):void=>{
    console.log(a+b);
}

const echo2:(a:string,b:string)=>void = (a,b) =>{
    console.log(a+b);   
}

// 可选参数 可选参数后面不能有必传参
function print(a:number,b:string,c?:boolean):void{}

// 默认参数 可选参数和参数默认值是互相排斥的
function print1(a:number=1,b:string,c?:boolean):void{}

// 剩余参数 
// 将所有参数收集为一个数组 给数字数组类型 =>函数有若干个参数 并且所有参数类型为number

function print2(...rest:number[]):void{}
function print3(a:string,...rest:number[]):void{}

// 函数的重载（overload）
// 在函数参数类型或个数不同的情况下 同一个函数具备不同的功能

// attr()

const app = document.getElementById('app')

function attr( el:HTMLElement, attrName:keyof HTMLElement,):string|null
function attr( el:HTMLElement, attrName:keyof HTMLElement,attrValue:string):undefined


function attr(
    el:HTMLElement,
    attrName:keyof HTMLElement,
    attrValue?:string)
    :string|null|undefined{
    // if(!attrName) return el?.getAttribute(attrName)
        if(typeof attrValue === "undefined"){
            // el.setAttribute(attrName)
            return el?.getAttribute(attrName)
        }else{
            el.setAttribute(attrName,attrValue)
        }
}
// 传参参数有2种情况
// 返回值有3种情况
// attr(app as HTMLElement,'id')
// attr(app as HTMLElement,'id','abc')

// 定义一个函数bar 一个参数可以为数字也可以为字符串 返回值为传入的数据

function bar(val:number):number
function bar(val:string):string

function bar(val:number|string):number|string{
    return val
}

// numbert =>numbert
// numbert =>string
// string =>string
// string =>number
bar(1)


// 函数类型的兼容性（包容关系）
// 控制变量法
// void 表示没有主动是有return关键字
// undefined return undefined
let f1:()=>undefined|number|void=()=>{};
f1 = ()=>{
    console.log(123);
    return 1
}


// 不考虑参数类型的情况下函数的类型的兼容性由返回值的兼容关系决定（协变）
app?.addEventListener('click',(e)=>{
 console.log(e);
})


let f3!:(a:number)=> undefined
let f4!:(a:1)=>undefined
// 不考虑返回值类型的情况下函数的类型的兼容性由参数的兼容关系相反（协变）


let f5!:(a:number,b:boolean,c:number[])=>{}
let f6!:(a:number,b:boolean)=>{a:number,b:boolean};

f5 = f6


app!.addEventListener('click',()=>{
    return 123
})


app!.addEventListener('click',(e)=>{
   console.log(e);
   return 123
})

app!.addEventListener('click',(e)=>{
    console.log(e);
    return 123
 })

//  参数逆变 返回值斜变！


// !! 泛性 

// 泛性  类型参数

function summary(a:number,b:number):number{
    return a + b 
}
summary(2,3)



type ZYB<T> = {
    name:'张义搏',
    age:number,
    gender:boolean,
    gf:T
}

let zyb:ZYB<{
    a:string,
    b:string
}> = { 
    name:'张义搏',
age:18,
gender:false,
gf:{
    a:'',
    b:''
}}
// 泛性类型
type RES<T> = {
    code:number,
    msg:string,
    data:T
};


type RES2<T = null> = {
    code:number,
    msg:string,
    data:T
};


// 泛性接口
interface Response<T>{
    code:number,
    msg:string,
    data:T
}
// 泛型约束  extends

type RES3<T extends any[]> = {
    code:number,
    msg:string,
    data:T
};

type RES4<U extends 200 | 201 | 301 | 400 | 401 | 500, T extends any[] = number[]> = {
    code: U,
    msg: string,
    data: T
};

let res2: RES4<301, number[]> = {
    code: 301,
    msg: '成功',
    data: [1, 2, 3]
};


interface Response<T = number[]>{
    code:number,
    msg:string,
    data:T
}


// 泛型函数

// 定义一个函数foo 具备一个参数 参数类型为任意类型  返回值  返回值类型和参数类型相同
 
function foo<T>(arg: T): T {
    return arg;
}
// 泛型函数中所有的泛型如果在任意一个位置确定了其具体的类型 那么所有位置类型呢全部确定
foo(1)

// 定义一个函数getValue 第一个参数为纯对象 第二个参数为第一个参数的任意的key 返回值为对象key的值


function getValue<T extends {},K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]
}
getValue({a:1,b:2,c:3} as const,'a' )
getValue({a:1,b:2,c:3} as const,'b' )



// 泛型工具类型

type partial<T> = {
    [p in keyof T]? :T[p]
}



export default{}
   
