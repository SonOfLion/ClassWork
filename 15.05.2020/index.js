//1.learn reqeirements & create algo
//2.create prototype solution
//3.refactoring & testing 
//4.final solution

//6
//1 - true,2 - true,3 - false,4 - false, 5 - false,6 - true.

//algo.
//1.iterate from 1 to num +++
//2.if (num % i === 0 - false)+++

// input:num;
// output:boolean;
function isPrime(num) {

    for (let i = 2; i < num; i++) {
        //console.log("if is NOT  called for i: " + i);
        if (num % i === 0) {
            //console.log("if is NOT  called for i: " + i);
            return false;
        }
        //console.log("if is NOT  called for i: " + i);
    }
    //console.log("loop is finished");
    return true;
}


//Algorithm.
//1.iterate from i to n +++
//2.write func that chech number prime.
//3.if number is prime - print it +++


// input:n;
// output:undefined;
function getPrimes(n) {
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}