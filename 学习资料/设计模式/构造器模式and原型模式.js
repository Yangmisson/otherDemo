// let student1 = {
//   name: '张三',
//   age: 18,
//   say() {
//     console.log(`${this.name}-${this.age}`)
//   }
// }
// let student2 = {
//   name: '李四',
//   age: 20,
//   say() {
//     console.log(`${this.name}-${this.age}`)
//   }
// }

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function () {
  console.log(`${this.name}-${this.age}`);
};
let person1 = new Person('张三', 18)



// class Person {
//   constructor(name, age) {
//     this.name = name;this.age = age
//   }
//   say() {console.log(`${this.name}-${this.age}`)}
// }
// let person = new Person('张三', 18)


// let Person = {
//   name: "张三",
//   age: "18",
//   describle: function(){
//     console.log(`${this.name}今年${this.age}`)
//   }
// };
// //创建一个p1对象，原型为Person
// var p1 = Object.create(Person);
// p1.describle();  // 张三今年18