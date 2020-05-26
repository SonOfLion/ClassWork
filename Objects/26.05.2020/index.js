//input:object,string;
//output:obj;
function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

//input:object,string;
//output:obj;
function addPropertyV2(userData, userId) {
    let target = {};
    let obj = { id: userId };
    return Object.assign(target, userData, obj);
}


//input:object,string;
//output:obj;
function addPropertyV3(userData, userId) {
    return Object.assign({}, userData, { id: userId });
}


//input:object,string;
//output:obj;
function addPropertyV4(userData, userId) {
    //how to copy obj;
    // let resObj = {...userData};
    // let resObj = Object.assign({},userData);

    let resObj = {...userData, id: userData };

    return resObj;
}

let userData = {
    name: 'Andrey',
    city: 'Lviv',
    age: 20,
};

let userId = "1111";

console.log(userData);

console.log(addPropertyV2(userData, userId));

console.log(userData);


//DEMO

// let arr = [1,5,6];
// let res = [...arr,5,10,12];

// console.log(res);