// !!! 纯对象类型

// 使用关键字 interface 定义对象的类型

interface o1 {

}
let o1:o1 = {};


interface o2 {
    name:string,
    age:number
}

let o2:o2 = {
    name:'ts',
    age:18,
}


interface o3 {
    name:string,
    age:number,
    gender?:boolean,
}

let o3:o3 = {
 name:'ttss',
 age:18,
 gender:false
}


type o3Name = (typeof o3)['name']
type o3Age = (typeof o3)['age']
type o3Gender = (typeof o3)['gender']
type o3All = (typeof o3)[keyof typeof o3]


// keyof T关键字的作用是将对象类型T的所有key计算为一个联合类型
// keyof o3 ====> 'name|age|gender'
// keyof any
// type KA = keyof any

// Ts强大的功能：类型推到
let t1 ={a:1,b:false,c:[]};

type T1 = keyof typeof t1

// type T2 ={a:number,b:numbert,c:numbere}
// 类型转换（类型体操）
// 主动
type T2 =  {
    [key in keyof typeof t1] : (typeof t1)[ keyof typeof t1]
}
// typeof  keyof  in

// 任意属性

// 被动
type T6 = {
    a:number,
   readonly b:string
    // [键：字符串|数字|符号]：任意
    [key:keyof any]:any
}

let t6:T6 ={
    a:1,
    b:'1'

}
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是任意属性的子类型：



type T7 = {
    a:null,
    b:undefined,
    c:boolean,
    d:string,
    e:number
}

type T8 = {
  readonly  [key in keyof T7] : T7[key]
}

type T9 = {
     [key in keyof T7]? : T7[key]
}

type T10 = {
    readonly [key in keyof T7]? : T7[key]
}

type T11 = {
    -readonly [key in keyof T7]-? : T7[key]
}
type T12 = {}
type T13 = {
    category:'phone'
}
type T14 = {
    category:'phone'
    brand:'huawei'
}

let t12:T12
let t13:T13
let t14:T14


type t15 = {
    a:number
    b:string
}
type t16 = {
    a:1
    c:boolean
}


// 交集 求他们的公共子类型

type T17 = t15 & t16
let t17:T17 = {
    a:1,
    b:'1',
    c:false,
}



// 对象类型a和b在交叉过程中 如过A和B中对属性不重叠 相当与合并二个对象类型的所有属性组成一个新的类型
// 如果存在重叠属性。则将重叠属性不同的类型进行再次交叉


// 联合类型本质是：
type T18 = t15 | t16
// {   a:1 c:boolean } |{a : number  b : string }
let t18:T18 ={
    a:1,
    b:'1'
}

let t19:T18 ={
    a:1,
    c:true
}

type T20 ={
    a:number
}
type T21 ={
    b:number
}
type T22 ={
    c:number
}
type T23 ={
    d:number
}
type T24 ={
    e:number
}
type T25 = T20 &T21 &T22 &T23 &T24  

type T26 = keyof T25




interface T30 {
    a:number
}

interface T31 extends T30 {
    b:number
}

interface T32 extends T31 {
    c:number
}

interface T33 extends T32 {
    d:number
}

interface T34 extends T33 {
    e:number
}

// type T35  = keyof T34


// 在使用interface和type定义对象类型时， 需要合并属性：

// 1、type 是有& 交叉类型
// 2、interface 同名 则自动合并 不同命 使用extends手动继承



// {name:string, age:numbert,a1:number}
// { name:string,age:number}


export default {}



