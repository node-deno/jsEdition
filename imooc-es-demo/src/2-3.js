// let arr = [1, 2, 3];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// 通过解构赋值的方式进行赋值，只要左右两边的结构是一样的就能进行赋值
// let [a,b,c]=[1,2,3]
// console.log(a,b,c);

// 解构赋值就是按照当前的结构直接赋值给变量
// let [a, b, [c, d]] = [1, 2, [3, 4]];
// console.log(a, b, c, d);

// let [a, b, c, d] = [1, 2, [3, 4]];
// console.log(a, b, c,d);

// let [a, b, c, d = 5] = [1, 2, [3, 4]];
// console.log(a, b, c, d);

// let [a, b, c, d = 5] = [1, 2, [3, 4], 6];
// console.log(a, b, c, d);

// 对象的结构赋值
// let user = {
//   name: "xiechjeng",
//   age: 34,
// };
// // let name=user.name
// // let age=user.age
// console.log(name, age);

// 在对象中解构赋值是通过key相互对应的
// let user = {
//   name: "xiechjeng",
//   age: 34,
// };
// let { age, name } = user;
// console.log(name, age);

// 在对象的解构赋值中想给等号左边的变量起别名需要使用冒号的方式
// let user = {
//   name: "xiechjeng",
//   age: 34,
// };
// let { age: uage, name: uname } = user;
// console.log(uname, uage);

// // 字符串的解构赋值，由于字符串具有类似于数组的特性，那么字符串在解构赋值的时候就和数组的解构赋值是一样的
// let str ='imooc'
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// let str = "imooc";
// let [a, b, c, d, e] = str;
// console.log(a,b,c,d,e);

// 结构赋值的应用场景

// 赋一些默认值
// let [a, b, c = 8] = [4, 5];
// console.log(a, b, c);
// let [a, b, c = 8] = [4, 5, 6];
// console.log(a, b, c);

// let { name, age = 18 } = {
//   name: "xiecheng",
// //   age: 34,
// };
// console.log(name, age);

// function foo() {
//   console.log(123);
// }
// let [a = foo()] = [1];

// 对函数的参数进行解构赋值
// function foo([a, b, c]) {
//   console.log(a, b, c);
// }
// let arr = [1, 2, 3];
// foo(arr);

// function foo({name,age}){
//     console.log(name,age);
// }
// let obj={
//     name:'xiecheng',
//     age:14
// }
// foo(obj)

// 对返回值进行解构赋值
// function foo() {
//   let obj = {
//     name: "xiecheng",
//     age: 34,
//     school: "***",
//   };
//   return obj;
// }
// let { name, age } = foo();
// console.log(name, age);

// 提取JSON数据
let json = '{"a":"hello","b":"world"}';
let { a, b } = JSON.parse(json); //先将JSON转化为对象
console.log(a, b);
