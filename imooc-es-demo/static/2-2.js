// Object.defineProperty(window, "PI", {
//   value: 3.14,
//   writable: false,
// });
// console.log(PI); //3.14
// PI = 5;
// console.log(PI); //3.14

// 会报错，常量不能被修改
// const a = 123;
// console.log(a);
// a=321
// console.log(a);

// 会报错
// const a
// a=123
// console.log(a);

// 通过常量定义对象,通过const定义的栈内存中的内容不会被改变，但是如果是对象的话可以对对象在堆内存中的内容进行改变
// const obj = {
//   name: "xiecheng",
//   age: 34,
// };
// console.log(obj);
// obj.school='imooc'
// console.log(obj);
// // 常量定义的数组也会进行改变
// const arr=[1,2,3]
// console.log(arr);
// arr[3]=4
// console.log(arr);

// 通过Object.freeze可以是对象在堆内存中的值也不被改变
// const obj = {
//   name: "xiecheng",
//   age: 34,
// };
// Object.freeze(obj);
// console.log(obj);//{name: "xiecheng", age: 34}
// obj.sex='男'
// console.log(obj);//{name: "xiecheng", age: 34}


// Object.freeze只能使对象的第一层不被改变，不能控制对象的第二层也不被改变
const obj = {
  name: "xiecheng",
  age: 34,
  skill:{
    name:'code',
    year:11
  }
};
console.log(obj);//obj.skill.age=11
obj.skill.age=10
console.log(obj);//obj.skill.age=10