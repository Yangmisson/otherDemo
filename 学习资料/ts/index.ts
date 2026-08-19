
//编译 tsc index.ts

//tsc --init 命令生成tsconfig.json
//终端=>运行任务=>typescript=>监视

// 一、数据类型
//布尔类型 boolean
//数字类型 number
//字符串类型 string
//数组类型 array
//元组类型 tuple
//枚举类型 enum
//任意类型 any
//null和undefined
//void类型
//never类型

let flag: boolean = true;
let num: number = 12.32;
let str: string = 'hello world';
let arr1: any[] = ['hello world', 1];
let arr2: number[] = [22, 1];
let arr3: [string, number] = ['22', 1];
let arr4: Array<any> = ['22', 1];
let arr5: Array<number> = [55, 1];
// 元组类型，数组的一种
let arr6: [string, number, boolean] = ['222', 121, true]
// 枚举类型
enum statusFlag {
    success = 1,
    fail = 0
}
var s: statusFlag = statusFlag.success;
var f: statusFlag = statusFlag.fail;
console.log(s)
console.log(f)
enum color {
    red,
    blue = 4,
    orange,
}
var c1: color = color.blue;
var c2: color = color.orange;
console.log('c1', c1)
console.log('c2', c2)

enum co{
    red=1,
    green,
    blue
}
let co1:co = co.green;

// 默认情况下null和undefined是所有类型的子类型
var num2: number;
// console.log(num2)  //报错

var num3: undefined;
// console.log(num3)  //正确

// 联合类型
var num4: number | undefined
num4 = 555;
console.log(num4)

//void 表示没有任何类型，一般用于定义方法的时候没有返回值

function run(): void {
    console.log('run');
}

run();

// never类型:其他类型（包括null和undefined）的子类型，代表不会出现的值  
// never类型表示的是那些永不存在的值的类型。
// 这意味着声明never的变量只能被never类型所赋值

let und: undefined;
und = undefined;

let nul: null;
nul = null

// 类型断言
let someValue:any = 'hello'
let StrLenght:number = (someValue as string).length

//函数的定义

function run2(): string {
    return 'hello world';
}

let run3 = function (): number {
    return 123;
}


function run4(name: string = 'yang', age?: number): string {
    return `${name}----${age}`
}
console.log(run4('张三', 25))
console.log(run4())

//重载
function css(name: string): any

function css(age: number): any

function css(str: any): any {
    if (typeof str === 'string') {
        return str
    } else {
        return str + '...'
    }
}

// 原型链上的属性会被多个实例共享，构造函数不会
// 静态方法
// 实例方法


/* 
    public:公有 在类里面、子类、类外面都可以访问
    protected:保护类型 在类里面、子类里面可以访问，在类外部没法访问
    proivate:私有  在类里面可以访问，子类、类外部都没法访问
*/


// 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
// 多态属于继承



class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    eat():void {
        console.log('eat...')
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat(): string {
        return this.name + '吃狗粮'
    }
}

let d = new Dog('katy');
console.log(d.eat())


//抽象类和抽象方法用来定义标准  标准：Animal这个类要求它的子类必须包含eat方法

abstract class Animal1 {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    abstract eat(): any
}
class Cat extends Animal1 {
    constructor(name: string) {
        super(name)
    }
    eat(): string {
        return this.name + '吃猫粮'
    }
}

let c = new Cat('bate');
console.log(c.eat())

//属性接口：对json的约束
/* function printLabel(label:string):void{

}
printLabel('hello'); */

function printLabel(label:string):void{

}
printLabel('hello');


interface FullName{
    firstName:string;//;结束
    secondName:string;
}
function printName(name:FullName){
    console.log(name.firstName+'---'+name.secondName)
}
printName({firstName:'yang',secondName:'yao'})

//接口：可选属性
interface fullName2{
    second:string,
    first:string,
    sex?:string
}
function getName(name:fullName2):void{
    console.log(name)
}
getName({first:'yang',second:'yao'})

//接口：只读属性
interface point{
    readonly x:number,
    y:number
}
let num5:point = {
    x:10,
    y:20
}
// num5.x = 6; //error!

interface constLength{
    length:number
}
function fun2<T extends constLength>(n:T):void{
    console.log(n.length)
}
























