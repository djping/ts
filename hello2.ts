// 类型断言（Type Assertion）:手动指定一个值的类型
// <类型>值 or 值 as 类型
function getLength (songting: string | number): number {
  // if (songting.length) {  // wrong
  // if ((<string>songting).length){
  if ((songting as string).length){
    return (<string>songting).length
  } else {
    return songting.toString().length
  }
}

// 声明文件
// 内置对象

// type类型别名--变量或函数--用于联合类型
type Name = string
type NameResolve = () => number
type NameOrResolve = Name | NameResolve
// type t = string | number
function newType (x: NameOrResolve): void {
  console.log(x)
}

// type字符串字面量类型--选其一
type EventNames ='click' | 'mouseover'
function handleEvent (el: Element, event: EventNames) {

}
handleEvent(document.body, 'click')

// 元组--赋值或初始化时需提供所有项
let tuple1: [string, number] = ['a', 1]
let tuple2: [number, string]
tuple2[0] = 1
tuple2[1] = "ahh"
// 越界元素：限制为元组元素的联合类型
// tuple2.push(true) // wrong
tuple2.push('https://github.com') // right
