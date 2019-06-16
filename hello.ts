let hello: number = 111
console.log(hello)

function say (person: string) {
  return "hello, " + person
}
say('world!')

// 原始数据类型
let isDone: boolean = true
// new Boolean(1)产生对象，Boolean(1)产生boolean值，其他类型同理
let createdByNewBoolean: Boolean = new Boolean(1)

let createdByBoolean: boolean = Boolean(1)

// number
let n: number = 0x11 //可以是2,8,10,16进制的数
let notANumber: number = NaN
let infinity: number = Infinity
// string
let s: string = "baby"

// void 表示没有任何返回值的函数
function sayNull (): void {
  console.log('this is function has no result')
}
// 只能把undefined 和 null 赋值给void
let unusable1: void = null
let unusable2: void = undefined

// undefined 类型的变量只能被赋值为 undefined，null 同理
let u: undefined = undefined;
let nnn: null = null;
// undefined 和 null 是所有类型的子类型,所以有：
let un: number = undefined

// any任意值,变量声明时未指定类型且未被赋值则当做任意值
let anything: any = 4
anything = "ahhhhh" // true
anything = 20

// 类型推论（Type Inference）
let mn = "hello"
// mn = 10 //false，此处会报错

// 联合数据类型(Union Types)
let myFavoriteNumber: number | string = 10
myFavoriteNumber = "ddffd"
// 当不确定Union Types的变量到底是哪种类型是，只能用其共用的方法和属性，否则会报错
// function getLength (n: number | string) : number {
//   return n.length
// }

// 对象类型-接口
interface Person {
  name: string,
  age: number,
  sex?: string,  // 可选属性
  [propName: number]: any, // 任意属性：确定属性和可选属性是其子集，否则报错
  // [propName: string]: string //false
  readonly id: number //只读属性，只能在创建对象的时候赋值且不可更改
}
let person: Person = {
  name: 'baby',
  age: 18,
  'sex': 'boy',
  id: 1997
}
// person.id = 10000

