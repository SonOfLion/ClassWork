// lexicalEnvironment = {
//     environmentRecord: {
//       <identifier> : <value>,
//       <identifier> : <value>
//     }
//     outer: < Reference to the parent lexical environment>
//   }


//Interview example
// let a = 10;
// let b = 20;

// printer(a);
// sum(a, b);

// function printer(a) {
//     console.log(a);
// }

// const sum = (a, b) => {
//     console.log(a + b);
// }

// let counter = 0;

function makeCounter() {
    // let counter = 10;
    let counter = 0;

    return function() {
        //OPTION1
        // counter++;
        // return counter;

        //OPTION2
        return counter++;
    }
}

let counter1 = makeCounter();
console.log(counter1());
console.log(counter1());
// console.log(counter1());
// console.log(counter1());

let counter2 = makeCounter();
console.log(counter2());
// console.log(counter2());
// console.log(counter2());