// 数组类型

// 类型+[]
let febo1: number[] = [1,3,4,5]
let febo2: any[] = [1,"dsfdfd",{name:1}]

// 数组泛型（Array Generic）
let febo3: Array<number> = [10,9,8,7]
let febo4: Array<any> = ["ahahah",9,8,7]

// 用接口表示数组
interface NumberArray {
  [index: number]: number
}
let febo5: NumberArray = [1,2]
let febo6: NumberArray = {'1':4,2:10}

// 类数组:都有自己的类型
function sum (): void {
  let argu: IArguments = arguments
}

// 函数的类型
// 函数声明
function sum1 (x: number, y: number): number {
  return x + y
}
// 函数表达式1，使用了类型推论，本只给了匿名函数一个类型
var sum2 = function (x: number, y: number): number {
  return x + y
}
// 函数表达式2，给变量添加类型
var sum3: (x: number, y: number) => number = function (x: number, y: number) {
  return x + y
}

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean
} 
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 可选参数和默认参数
function buildName1 (name: string, age: number): string {
  return name + ' ' + age
}
buildName1('Tee', 18)

function buildName2 (name: string = 'tom', age?: number): string {
  return name + ' ' + age
}
console.log(buildName2())

// 剩余参数：...rest: any[],rest 参数只能是最后一个参数
function push (array: any[], ...items: any[]) {
  items.forEach(item => {
    array.push(item)
  })
}

// 函数重载: 根据参数的不同数量或类型做出不同的处理
function reverse (x: number): number
function reverse (x: string): string
function reverse (x: number | string) : number | string {
  if (typeof x === 'number') {
    return x.toString().split('').reverse().join()
  } else {
    return x.split('').reverse().join()
  }
}
reverse(3254)
 