//good
let array1 = [2, 4, 6, 7];

// //bad
// let array2 = new Array();

//input:arr of numbers;
//ouput:arr of numbers;
// function squareArray(arr) {
//     if (!Array.isArray(arr)) return null;

//     let res = [];

//     for (let i = 0; i < arr.length; i++) {
//         res.push(res[i] * res[i]);
//     }
//     return res;
// }

// function squareArray(arr) {
//     if (!Array.isArray(arr)) return null;

//     let res = [...arr];

//     for (let i = 0; i < arr.length; i++) {
//         res[i] = (res[i] * res[i]);
//     }
//     return res;
// }
function squareArray(arr) {
    if (!Array.isArray(arr)) return null;

    let res = [];

    for (let el of arr) {
        res.push(el * el);
    }
    return res;
}

console.log(squareArray(array1));