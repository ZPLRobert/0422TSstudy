"use strict";
// !!! 纯对象类型
Object.defineProperty(exports, "__esModule", { value: true });
let o1 = {};
let o2 = {
    name: 'ts',
    age: 18,
};
let o3 = {
    name: 'ttss',
    age: 18,
    gender: false
};
// keyof T关键字的作用是将对象类型T的所有key计算为一个联合类型
// keyof o3 ====> 'name|age|gender'
// keyof any
// type KA = keyof any
// Ts强大的功能：类型推到
let t1 = { a: 1, b: false, c: [] };
let t6 = {
    a: 1,
    b: '1'
};
let t12;
let t13;
let t14;
let t17 = {
    a: 1,
    b: '1',
    c: false,
};
// {   a:1 c:boolean } |{a : number  b : string }
let t18 = {
    a: 1,
    b: '1'
};
let t19 = {
    a: 1,
    c: true
};
// type T35  = keyof T34
// 在使用interface和type定义对象类型时， 需要合并属性：
// 1、type 是有& 交叉类型
// 2、interface 同名 则自动合并 不同命 使用extends手动继承
// {name:string, age:numbert,a1:number}
// { name:string,age:number}
exports.default = {};
