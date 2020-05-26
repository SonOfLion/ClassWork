//input:object,object;
//output:obj;
function mergeObjectsV1(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

//input:object,object;
//output:obj;
function mergeObjectsV2(obj1, obj2) {
    return Object.assign(obj2, obj1);
}


//input:object,object;
//output:obj;
function mergeObjectsV3(obj1, obj2) {
    let resObj = Object.assign(...obj1, ...obj2);
    return resObj;
}


//input:object,object;
//output:obj;
function mergeObjectsV4(userData, userId) {
    //how to copy obj;
    // let resObj = {...userData};
    // let resObj = Object.assign({},userData);

    let resObj = Object.assign(...obj2, ...obj1);

    return resObj;
}

let obj1 = {
    name: 'Andrey',
    phone: '09399099193',
    price: 20111,
};


let obj2 = {
    name: 'Denis',
    city: 'Lviv',
    age: 20,
};
let userId = "1111";


console.log(mergeObjectsV1())
    // console.log(userData);

// console.log(addPropertyV2(userData, userId));

// console.log(userData);