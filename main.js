// // 1.We saw that we can pass functions as arguments to other functions.
// // Your task is to write a function that takes another function as an argument and runs it.


function foo(func) {
    return bar();
}
function bar() {
    console.log('Hello, I am bar!');
}
foo(bar);


// // 2).You must write a function that takes 4 arguments.
// //     - A start value
// //     - An end value
// //     - A callback to call if the number is divisible by 3

// //     - A callback to use if the number is divisible by 5
// // The function should generate an array containing values from start value to end value(inclusive).
// // Then the function should iterate over the array and call the first callback if the array value is divisible by 3
// // The function should call the second callback if the array value is divisible by 5
// // Both functions should be called if the array value is divisible by both 3 and 5

function FiveAndTree(startValue, EndValue, threeCallback, fiveCallback) {
    let arra = [];
    for (let i = startValue; i <= EndValue; i++) {
        arra.push(i);
    }
    arra.forEach(numbr => {
        if (numbr % 3 === 0) {
            threeCallback(numbr);
        }
        if (numbr % 5 === 0) {
            fiveCallback(numbr);
        }
    })
}

function say(divided) {
    return function (numbr) {
        console.log(`${numbr} is divided by ${divided}`);
    }
}

FiveAndTree(18, 25, say('tree'), say('five'));


// // 3).Please solve this problem using:

// //  https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string  
// // 3.1 A for loop.  
// // 3.2 A while loop.  
// // 3.3 A do loop. 

function repeatStringNumTimes(str, num) {
    let answerStr = "";
    while (num > 0) {
        answerStr += str
        num--;
    }
    return answerStr;
}
repeatStringNumTimes("abc", 8);

// // 4). Some practice with objects 
// // https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions


// // 5).Nested loops
// // https://www.freecodecamp.com/challenges/nesting-for-loops

// // 6\.We did some work with arrays - `var arr = [1,2,3]`
// // We can also nest arrays inside arrays like this `var arr2d = [[1,2], [3,4], [5,6]]`
// // (for math people you can think of this as a matrix)
// // How would you print all the items of an array with 3 dimensions ?
// // How about with K dimensions ?
// // What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it)

let theArrInArr = [[[1, 'a'], [2, 'b'], [3, 'c']]];
function fetchArr(argmnt) {
    if (Array.isArray(argmnt)) {
        argmnt.forEach(elementent => fetchArr(elementent));
    } else {
        console.log(argmnt);
    }
}
fetchArr(theArrInArr);

// // 7.Here are two functions that look like they do the something similar but
// // they print different results.Please explain what's going on here.

let x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);


let y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);

let calc = function (num1, num2) {
    if (num1 = "add") {
        return num2 = 2;
    }
}
console.log(calc(3, "add"));

let myArray = ["Orange", "Banana", "Apple", "Mango"];

for (let i = 0; i < 7; i++) {
    console.log(i);
}