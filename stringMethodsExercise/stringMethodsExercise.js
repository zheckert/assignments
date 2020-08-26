// https://coursework.vschool.io/string-methods-exercise/
"use strict";

// 1.
// function capsChanger(string) {
//     const uCase = string.toUpperCase();
//     const lCase = string.toLowerCase();
//     return uCase + lCase;
// }

// console.log(capsChanger("This is a string"))

// 2.
// function roundDown(string) {
//     const middleIndex = Math.floor(string.length / 2)
//     return middleIndex;
// }

// console.log(roundDown("12345"))

// 3.
// function halvsies(string) {
//     let totalLength = Math.floor(string.length / 2)
//     let firstHalf = string.slice(0, totalLength);
//     return firstHalf;
// }

// console.log(halvsies("12345"))

//4
function oneTwo(string) {
    let totalLength = Math.floor(string.length / 2)
    let uC = string.slice(0, totalLength)
    let lC = string.slice(string.length - totalLength)
    const uCase = uC.toUpperCase();
    const lCase = lC.toLowerCase();
    return uCase + lCase

}

console.log(oneTwo(""))