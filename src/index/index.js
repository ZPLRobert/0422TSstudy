"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let user = {
    name: 'xx',
    age: 18
};
const _user = _.cloneDeep(user);
// 类型声明文件（.d.ts）作用是让js文件也获得良好的类型提示（ts兼容js的方案）
// typescript 内置类型（简单类型。引用类型。DOM , BOM 构造函数名称就是其类型名称 善于利用ts的类型推到）
// 第三方库定义的类型
// 自己定义的类型
// 
let x1 = window;
let x2 = location;
let X3 = history;
let p = document.getElementsByTagName('p')[0];
let span = document.getElementsByTagName('span')[0];
let h = history;
let p1;
let span1;
let A = (Promise);
axios_1.default.get('/user');
//Axios.get<any, AxiosResponse<any, any>, any>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>>
// get函数是一个泛型函数
// 该函数有3个泛型
// 泛型的默认值 any   AxiosResponse<any, any>  any
