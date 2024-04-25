"use strict";
// * 每一个ts文件默认都不是一个具有作用域的模块 ---> 为了全局共享类型
// 但是如果在ts中主动使用模块化语法（import 、 exprot、 export defaut），那么该文件就具备作用域
Object.defineProperty(exports, "__esModule", { value: true });
// ts的内置类型（内置集合）
// 数字 字符串  布尔值 、 null 、未定义undefined 、数组 、对象、函数、
let n1 = 1;
let n2 = '1';
let n3 = true;
let n4 = null;
let n5 = undefined;
// never就是数学集合概念中的空集
let n6;
// 集合中一个成员的自定义集合
let n7 = 1;
let n8 = false;
let n9 = '';
// 集合中出现二个成员怎么处理？
let n10 = 1;
let n11 = 1;
// 如果有多个成员用 |连接一个新集合
// 以上操作就是数学概论中的并集
let n12 = 1;
//  交集
let n13 = 1;
let n14; //never
/**
 * 总结：
 * 1.类型的本质是集合、赋值的本质是值属不属于该集合
 * 2.类型的运算(|联合、&交叉)相当于数学中集合的运算（并集、交集）
 *
 */
//！确定赋值断言
let n15;
let n16;
// 如果变量a:A可以赋值给变量b:B则说明什么？
// A是B的子级
// number完全包含1|2的范围
// n15 = n16;
// n16 = n15
// 变量的初始化和变量间的赋值：本质都是包含关系
// 顶部类型和底部类型
// 顶部类型是所有集合的父集  顶部类型是所有类型的父类型 （any、unknown）
// 底部类型是所有集合的子集  底部类型是所有类型的子类型 (any、never、undefined、null)
// 如何验证某一个类型是一个顶部类型？？
let n17;
n17 = n1; //any包含nummbet
n17 = n12; // any包含string
n17 = n2;
n17 = n3;
n17 = n4;
n17 = n5;
n17 = n7;
// let m1:number = n6
let m4;
m4 = 123;
let m5 = [];
let k = 123;
let m6;
exports.default = {};
