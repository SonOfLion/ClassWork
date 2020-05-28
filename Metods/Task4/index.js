//input:array,array;
//output:object;


//1. learn requirements
//2. input & output create algo
//3. create prototype solution
//4. refactoring & testing
//5. final solution 


//Algo
//1.Iterate keys
//2.get value by index & put to the object


// function buildObjectDemo(keysList, valueList) {
//     keysList.reduce((acc, key, index) => {

//         console.log('acc', acc);
//         console.log('index' + index);
//         console.log('KEY' + key);

//         let value = valueList[index];

//         console.log('Value' + value);

//         let obj = Object.assign({}, {
//             [key]: value
//         });

//         console.log('Obj', obj);
//         console.log();

//         return obj;
//     }, {});
// }


function buildObject(keysList, valuesList) {
    return keysList.reduce((acc, key, index) => {
        return { ...acc, [key]: valuesList[index] };
    }, {});
};

let keys = ['name', 'city', 'price'];
let values = ['Denis', 'Lviv', 300];

console.log(buildObject(keys, values));