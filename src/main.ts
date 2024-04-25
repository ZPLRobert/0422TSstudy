 import axios from 'axios'
//  如果你需要使用某一个Ts文件中定义的类型
import './home.js'

// 情况1 ：该ts文件中不存在模块化语法 则可以直接使用 （所有的自定义类型和接口都是全局的）
// 情况2 ：该ts文件中存在模块化语法 则可以将你使用的自定义类型和接口导出 让后在导入使用 （所有的自定义类型和接口都是有作用域的）

 export interface User {
    name:string,
    age:number
 }

 console.log(a);
 console.log(b.age);
 c(123)
 $1.a