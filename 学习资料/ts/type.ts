
let fun: (a: number, b: number, ...c: number[]) => number;


fun = (a: number, b: number, c): number => {
  return a + b
}
fun(1, 20, 1, 100, 200)

let b: string[]
let c: Array<number>
// 元组：元素长度固定单独数组
let d: [string, number];
d = ['ddd', 456]

// enum枚举
enum Gender {
  male = 0,
  feMale = 1,
}
let e: { name: string, gender: Gender }
e = {
  name: '张三',
  gender: Gender.male
}
// 类型别名
type myType = 1 | 2 | 3 | 4
let f: myType
f = 3

class Person {
  name: string;
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
let person = new Person('张三', 14)

// 类型断言
/*
*语法：
*变量 as 类型
*<类型>变量
*/




// tsc 文件名
// tsc 文件名 -w
// 新建tsconfig.json文件,可监控目录下所有ts文件