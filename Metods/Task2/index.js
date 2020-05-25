//input:arr,function;
//output:arr;

//Algo
//1.Create array++
//2.iterete  array++
//3.if callback condition is ok -add to array if not skip ++

// function filterArrayElements(arr, callback) {
//     let filtered = [];

//     for (let i = 0; i < arr.length; i++) {
//         let res = callback(arr[i], i, Array);

//         if (res) {
//             filtered.push(arr[i]);
//         }
//     }
//     return filtered;
// }


//MAP

//input:arr,function;
//output:arr;

//Algo
//1.Create array++
//2.iterete  array++
//3.Apply callback func every element and add rusult ro array

// function filterArrayElements(arr, callback) {
//     let mapped = [];

//     for (let i = 0; i < arr.length; i++) {
//         let res = callback(arr[i], i, arr)
//         mapped.push(res);
//     }
//     return mapped;
// }


// const numbers = [1, 2, 3, 4, 5, 100, 40, 44, 55, 1234];
// // let callback = (el) => el % 2 === 0;
// let callback = (el) => 0;

// let res = filterArrayElements(numbers, callback);

// console.log(res);

//SORT

// const numbers1 = [1, 55343, 2, 3, 4, 5, 100, 40, 44, -1, 55, 1234];

// console.log(numbers1.sort((el1, el2) => el2 - el1));

// const numbers2 = ['test', 'aaa', 'ddd', 'zzz'];
// console.log(numbers2.sort((a, b) => a.localeCompare(b)));

//< 0 , el1 > el2
// === 0, el1 === el2
//< 0, el1 < el2

function makeUser(name, age) {
    return {
        name: 'Arr',
        age: 31,
        // ...другие свойства
    };
}

let user = makeUser("Gfgf", 30);

console.log(user);