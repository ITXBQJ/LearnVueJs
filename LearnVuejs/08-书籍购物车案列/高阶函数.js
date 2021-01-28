//编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
//filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个bool值
//true:当返回true时，函数内部会自动蒋这次回调的n加入到新的数组中
//false：当返回false时，函数内部会过滤掉这次的n

// //1.filter函数的使用
// const nums = [10,20,111,222,444,40,50];

 let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n)

// let newNums = nums.filter(function(n){
// 	return n < 100;
// })
// console.log(newNums);

// //2.map函数的使用
// let new2Nums = newNums.map(function(n){
// 	return n * 2;
// })

// //3.reduce函数的使用
// //reduce作用对数组中的所有内容进行汇总
// let total = new2Nums.reduce(function(preValue,n){
// 	return preValue + n;
// },0)

//第一次：preValue 0 n 20
//第二次：preValue 20 n 40
//第三次：preValue 60 n 80
//第四次：preValue 140 n 100
//240