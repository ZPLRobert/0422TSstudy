1、什么是typescript (ts)?
typescript = type + javascript 它是js的高级，就好像是less和sass时css的超级一样，完全兼容js的语法

2、为什么要学ts？
 1.各大框架纷纷支持ts( Angular、vue3、react ) 
 2.鸿蒙纯血版本开发语言是基于ts的超级（arkTS）
 3.避免各种运行时的报错（在代码编写的过程中提前告知你错误） + 良好且准确的语法提示！！
 4.所有ES2015-ES2024的提案新的语法全都是没有兼容性的



3、如何学？
学习ts的过程可以简化为学习type的过程。

4、什么是type？
类型 === 集合

人类 === 所有人的集合

集合、空集、交集、并集、父集、子集

集合的分类学习：ts内置的集合 => 自定义的集合


静态类型检查报错 （不会模拟运行代码而做出的检查）


5、ts的弊端：1000行 === 1600行ts


6、ts变量定义的完整语法。
let 变量名:类型 = 值
const 变量名:类型 = 值
var 变量名:类型 = 值

注意：值必须是该类型集合的一个成员！！！

let n:数字 = 1；    √
let n:数字 = '1'    X
let n2:空集 = 123   X
let n3:'ts' = 'ts'  √
let n4:'ts' = 'ts1' X

通过：集合名词（类型名词）
值可以赋值给变量的前提是值是属于变量限制的集合的！


总结：
1、基本类型： number string boolean null undefined  never  any  unkown
2、顶部类型：any unkown 
3、底部类型：amy never undefined null
4、type关键字 ：定义新类型 、 定义类型别名
5、联合类型:并集
6、交叉类型：交集
7、extends关键字：判断类型的兼容性关系（本质上就是集合的包含关系）
8、分布式条件类型




 联合类型(并集)  求公共父类型
 交叉类型（交集） 求公共子类型
 A & B = C
 C extends A 且C extends B

 A | B = C 
 A extends C 且 B extends C
