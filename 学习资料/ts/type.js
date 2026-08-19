var fun;
fun = function (a, b, c) {
    return a + b;
};
fun(1, 20, 1, 100, 200);
var b;
var c;
// 元组：元素长度固定单独数组
var d;
d = ['ddd', 456];
// enum枚举
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["feMale"] = 1] = "feMale";
})(Gender || (Gender = {}));
var e;
e = {
    name: '张三',
    gender: Gender.male
};
var f;
f = 3;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var person = new Person('张三', 14);
// 类型断言
/*
*语法：
*变量 as 类型
*<类型>变量
*/
// tsc 文件名
// tsc 文件名 -w
// 新建tsconfig.json文件,可监控目录下所有ts文件
