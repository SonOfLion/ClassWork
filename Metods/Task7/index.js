//TODO fix it

//Scope example
// let message = 'Hello';

// if (true) {
//     let message = 'Hi';
//     console.log(message);
// }


// {
//     let message = 'Hey';
//     console.log(message);
// }

// console.log(message);

//hoisting example

// 'use strict';

// console.log(sum(5, 6));

// function sum(a, b) {
//     return a + b;
// }

// console.log(message);
// var message = "Hello there!";
// console.log(message);

// console.log(message);
// const message1 = 'Hello there!';

//hoisting VAR example 1
// var a = 10;

// if (true) {
//     if (true) {
//         var a = 50;
//         console.log(a);
//     }
// }

// console.log(a);


//hoisting VAR example 2
var foo = 1;

console.log(foo); //1

function bar() {
    console.log(foo); //variable undefined
    if (!foo) { //true
        console.log(foo); //variable undefined
        console.log(!foo); //True
        var foo = 10;
        console.log(foo); //10
    }
    return foo;
    console.log(foo);
    console.log(!foo);
}
//Переменная со значением 1
//Функция bar (input:undefined)
//Если есть в переменной значение
//Переменной дается значение
//Вывести значение переменной в консоль
//Вернуть переменную

var foo = bar(); //10
console.log(foo);

//hoisting VAR example 3
// var message = 'hello';

// function print() {
//     // var message
//     console.log(message);
//     var message = 'stop';
// }

// console.log(message);
// print();

//scope example
// let message = 'Hello';

// if (true) {
//     // let message = 'Hi';
//     console.log(message);
// }

// console.log(message);