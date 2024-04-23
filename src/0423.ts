// ? 数组类型

// 定义一个纯数字的数组:
let a1:number[] = [1,2,3,4]
let a2:undefined[] = [undefined,]
let a3:Array<string> =['1','2']

// T[] 等价于 Array<T>  其中T表示任意类型

// 情况1： 数组中每个成员的类型相同  开发中居多
// 情况2： 数组中每个成员的类型不相同  学习中居多


// typeof

let n1:number=1
type N1= typeof n1



type A1= typeof a1;

// a1是数组的数据
// A1是数组类型
// 如何获取数组成员的类型


const i0 = a1[0];
type I0 = A1[0];
type I01 = A1[0] | A1[1]
type IAll = A1[number]
// 数组变量可通过索引取值，数组类型可以通过索引成员类型


// 定义一个数组 成员的类型不统一 而且长度未知
let a4:(number|string|boolean|undefined|null)[] = [1,undefined,false]

let a5:any[] = a4

let a6:1[] = [1,]
let a7:(1|2)[] = [1,2]

type A9 = 1 | 2 | false | undefined
 
// 在ts任意一个赋值表达式中成立则说明存在包含关系

// 如何判断类型的包含关系:
// type X = T[]; type Y = U[] ;协同变化
// 如果T包含U 则 X包含Y

type A67 = typeof a6 extends typeof a7 ? true :false

/**
 *  重点：
 * 1、如何定义数组类型
 * 2、如何获取数组类型获取成员类型（numbert的妙用）
 * 3、如何判断两个数组的包含关系
 * 4、联合类型联合（仅为）底部类型无效的
 * 5、如何定义元组类型以及添加越界元素的类型的约束
 */

 // 定义一个数组 成员的类型不统一 而且长度已知（元组）

let t1:[number,boolean,string] =[1,false,'1']


// 给元祖添加越界元素类型必须是[number,boolean,string]

t1.push()


// 联合类型(并集)  求公共父类型

// 交叉类型（交集） 求公共子类型

// A & B = C

// C extends A 且C extends B


// A | B = C 

// A extends C 且 B extends C


type O = 1 & 2
type O1 = O extends 1 ? (O extends 2 ? true : false) :false

type P = 1 | 2
type P1 = 1 extends P ? (2 extends P ? true : false) :false

