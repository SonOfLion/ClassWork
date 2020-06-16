'use strict';

// const user = {
//     name: 'Andrey',

//     sayHi() {
//         console.log(this);
//         console.log(`hello ${this.name}`);
//     }
// }

// let func = user.sayHi;

// func();

// function printMassage(age, city) {
//     console.log(this);
//     console.log(`Hello ${this.name}, email ${this.email}, age ${age}, city ${city}`);
// }

// let user = {
//     name: 'Alex',
//     email: 'gmail.com',

// printMassage(age, city) {
//     console.log(this);
//     console.log(`Hello ${this.name}, email ${this.email}, age ${age}, city ${city}`);
// },
// };

//printMessage(50,'Kyev');
// let bindePrintMessage = printMassage(user);
// bindePrintMessage(50, 'Kiev');

//input: func, obj;
//output:func;
// function myBind(func, context) {
//     return func.bind(context);
// }

// //test data
// let bindePrintMessage = myBind(printMassage, user);
// bindePrintMessage(50, "Kiev");

//input: func, obj;
//output:func;
// function myBind2(func, context) {
//     //TODO implement it
//     // обрезать не нужные агрументы
//     const bindArgs = [].slice.call(args);

//     return function() {
//         let argum = [].slice.call(arguments); // а вот тут нужные агрументы
//         return fun.apply(context, bindArgs.concat(argum)); // нужно все собрать 
//     }
// }

//input: func, obj;
//output:func;
// export function bind(func, context) {
//1. add func into context
//2. call func and return result
//     return function(...args) {
//         let copyContext = Object.assign({}, context);

//         copyContext.tempFunc = func;

//         console.log(context);
//         console.log(args);

//         return copyContext.tempFunc(...args);
//     }
// }

// let bindePrintMessage = myBind2(printMassage, user);
// console.log(bindePrintMessage);
// bindePrintMessage(50, "Kiev");

// console.log(user);

// function myBindApply(func, context) {
//     //1. add func into context
//     //2. call func and return result


//     return function(...args) {
//         let funcResult = func.apply(context, args);
//         return funcResult;
//     }
// }

// //test data
// let bindePrintMessage = myBindApply(printMassage, user);
// bindePrintMessage(50, "Kiev");

function order(words) {
    if (words == '')
        return "";

    words.sort((a, b));

    return 0.5 - Math.random();
}

console.log(order(["is2 Thi1s T4est 3a"]));