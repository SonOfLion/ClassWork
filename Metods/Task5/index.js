let obj1 = {
    name: 'Andrey',
    age: 20,
    city: 'Kiev',
}

let obj2 = {
        age: 20,
        name: 'Denis',
        city: 'Kiev',
    }
    //1. learn requirements
    //2. input & output create algo
    //3. create prototype solution
    //4. refactoring & testing
    //5. final solution 

//input:obj1,obj2;
//output:bool;

//1. Compare two objects by length if === return true/false
//2. Iterate keys and compare values.If not equal - return false
// function compareObjects(obj1, obj2) {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length)
//         return false;

//     return keys1.reduce((acc, key, index) => {
//         if (acc === false)
//             return false;
//         console.log("acc " + acc);
//         console.log("index" + index);

//         console.log("step ");

//         let value1 = obj1[key];
//         let value2 = obj2[key];

//         console.log("acc " + acc);
//         console.log("step " + value1);
//         console.log("step " + value2);

//         if (value1 !== value2) {
//             return false;
//         } else {
//             return true;
//         }
//     }, true);
// }

function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length)
        return false;

    return keys1.reduce((acc, key) => {
        if (acc === false)
            return false;

        return obj1[key] === obj2[key];

    }, true);
}


console.log(compareObjects(obj1, obj2));