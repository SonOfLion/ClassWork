//Class
//prototype - это скрытое свойство объекта, имеет сылку на объект
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`Hi, I am ${this.name}`);
//     }

//     requestNewPhoto() {
//         console.log(`New photo request was sent for ${this.name}`);
//     }

//     setAge(value) {
//         if (value < 0) return false;

//         this.age = value;

//         if (value >= 25) {
//             console.log(`New photo request was sent for ${this.name}`);
//         }
//         return this.age;
//     }
// }
// export function User(name, age) {
// let user = {};
// Object.assign(user, { name });
// Object.assign(user, { age });
// return user;

//     this.name = name;
//     this.age = age;

//     User.prototype.sayHi = function() {
//         console.log(`Hi, I am ${this.name}`);
//     };

//     User.prototype.requestNewPhoto = function() {
//         console.log(`New photo request was sent for ${this.name}`);
//     };

//     User.prototype.setAge = function(value) {
//         if (value < 0) return false;

//         this.age = value;

//         if (value >= 25) {
//             console.log(`New photo request was sent for ${this.name}`);
//         }
//         return this.age;
//     };
// }

// console.log(User.prototype);
// User.prototype.sayHi = 15;

// let user1 = new User('Test', 50);
//console.log(sayHi());
// user1.setAge(30);

// console.log(user);
// user.sayHi();