//  infer  推导

// 类似于js的结构赋值 （针对的是值）
let arr = [1,false]
let [a,b] = arr
// info 类型推断（针对的是类型）
// 泛性约束了A必须是一个数组的类型
// 当你类型数组的长度大于等于1 则
type T1<A extends unknown[]> = A extends [infer B,...unknown[]] ? B  : never  
type T2 = T1<[number,boolean,string]>


type T3<A extends unknown[]> = A extends [any,infer C,...unknown[]] ? C  : never  
type T4 = T3<[number,boolean,string]>

type T5<A extends unknown[]> = A extends [infer B , any, infer C,...unknown[]] ? [B,C]  : never  
type T6 = T5<[number,boolean,string]>
type T7 = T5<[number,boolean]>

// 获取最后一位
type T8<A extends unknown[]> =  A extends [...unknown[],infer B] ? B  : never  
type T9 = T8<[number,boolean,string]>


// 定义一个工具类型Pop<T> 可以删除数组类型的最后一个类型并返回删除后的类型
type Pop<A extends unknown[]>  = A extends [...infer B, any] ? B  : never 
type T10  = Pop<[1,2,3,4,5]>


// 定义一个工具类型Shift 可以删除数组类型的第一个类型并返回删除后的类型

type Shift<A extends unknown[]>  = A extends [] ? [] : A extends [ any ,...infer B] ? B  : never 
type T11  = Shift<[]>
type T12  = Shift<[ 1 , 2 , 3]>

// 字符串模式匹配类型推 导

// 定义一个StartsWith工具
type StartWith<A extends string,B extends string> = A extends `${B}${string}`?true :false
type T13 = StartWith<'abc','b'>
type T14 = StartWith<'abc','a'>

// 

type T16 <A extends string> = A extends `${infer B}_${infer C}` ?[B,C] : A
type T15 = T16<'abc_def'> //['abc'.'def']
type T17 = T16<'abcdef'> //

// 函数
// 定义一个GetReturnType 获取任意函数的返回值类型

type GetReturnType<A extends (...rest:any[])=> any > = A extends (...rest:any[])=> infer R ?R : false


type T18 = GetReturnType<()=> number>


// 获取函数的第一个参数类型

type GetFirstParamType<A extends (...rest: any[]) => any> = A extends (...rest: [infer A,...any[]]) => any ? A : never;

// GetParams

type GetParams <F extends (...rest: any[]) => any>   = F extends (...rest:infer p )=>any ? P : never
type T19 = GetParams<(a:number,b:string)=>void>


// 映射类型

type toReady<O extends {}>= {
   readonly [key in keyof O] : O[key]
}
// 映射类型加深

// Filter 筛选属性对应的值的类型 满足某种条件
// in操作中 如果你对可以有额外的条件限制 则需要是有as跟条件
type Filter<A extends {},B > ={
    [key in keyof A as A[key] extends B?key:never] : A[key]
}

type T20 = Filter<{a:number,b:boolean,c:number[]},number|boolean> 
//{ a:number,b:boolean}


// RepeatKey
type RepeatKey<A extends {}> = {
    [key in keyof A as key extends string ? `${key}${key}`:never   ] : A[key]
}

// RepeatKey<{a:number,b:boolean,c:number[]}>
type T21 = RepeatKey<{a:number,b:boolean,c:number[]}>
// aa:number, bb:boolean ,cc:number[]
export default {}