let arr = [1, 2, 3];
// // for循环遍历数组
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// // forEach循环遍历数组
// arr.forEach(function(element,index,array){//element指当前遍历的这个对象；index指当前遍历对象的索引；array指当前被遍历的这个数组中所有的值
//     console.log('对象--'+element);
//     console.log('索引--'+index);
//     console.log('数组--'+array);
// });

// for与foreach之间的差异是，for有break与continue关键字；而foreach没有，也就是在循环的过程中不能中止

// .map循环遍历数组
// let a=arr.map(function (element, index, array) {
//   //element指当前遍历的这个对象；index指当前遍历对象的索引；array指当前被遍历的这个数组
//   console.log(element);
//   console.log(index);
//   console.log(array);
// return index;
// });

// 对.map的element操作，.map的返回值可以生成一个新的数组
// let tmp = arr.map(function (element, index, array) {
//   element += 1;
//   return element;
// });
// console.log(arr);//[1,2,3]
// console.log(tmp);//[2,3,4]

// filter（过滤）
// arr.filter(function (element, index, array) {//element指当前遍历的这个对象；index指当前遍历对象的索引；array指当前被遍历的这个数组
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// let tmp = arr.filter(function (element, index, array) {
//   return element % 2 != 0;
// });
// console.log(arr, tmp);

// .some
// arr.some(function (element, index, array) {//element指当前遍历的这个对象；index指当前遍历对象的索引；array指当前被遍历的这个数组
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });

// let tmp = arr.some(function (element, index, array) {
//   return element==4;
// });
// console.log(arr, tmp);

// .every
let tmp = arr.every(function (element) {
  //element指当前遍历的这个对象；index指当前遍历对象的索引；array指当前被遍历的这个数组
  return element == 2;
});
console.log(tmp, arr);
