// var->variable(可变的)
// 使用var定义对象相当于在当前作用域下定义了一个变量（如果在函数内使用var定义的变量在函数外就不能使用）
// var a = 5;
// console.log(a);
// delete a
// console.log(a);

// 如果直接给一个变量赋值相当于是给window上面的一个属性进行赋值，也就相当于这个变量是全局变量（也就是说在this指向window的地方，直接对一个对象进行赋值就相当于定义了一个全局变量）
// delete可以删除全局变量
// b=6;
// console.log(b);
// delete b
// console.log(b);

// console.log(a);
// var a=5;

// 形成暂时性死区，因为在let关键字定义的变量中，在大括号中相当于一个作用域，不能进行先赋值后声明，就算之前已经声明过了也不可以
// var a=5
// if(true){
//     a=6
//     let a
// }

// 比较隐蔽的暂时性死区，暂时性死区的本质就是在变量声明之前先对变量进行了赋值
// function foo(a = b, b = 2) {
//     console.log(a,b)
// }
// foo()


// for(var i=0;i<3;i++){
//     console.log('循环内的'+i)
// }
// console.log(i);


// if(false){
//     var a=5
// }
// console.log(a);

// setTimeout属于异步操作，需要在同步的语句全部执行结束之后再执行异步操作
// for(var i=0;i<3;i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(j)
//         })
//     })(i)
// }
// for(let i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i)
//     })
// }