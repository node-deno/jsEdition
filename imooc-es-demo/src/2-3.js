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

let str = "imooc";
let [a, b, c, d, e] = str;
console.log(a,b,c,d,e);