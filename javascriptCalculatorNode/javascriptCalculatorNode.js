var readlineSync = require('readline-sync');

var num1 = readlineSync.questionInt("What is your first number?\n");
var num2 = readlineSync.questionInt("What is your second number?\n");

operations = ["add", "multiply", "divide", "subtract"];
index = readlineSync.keyInSelect(operations, "What would you like to do with your numbers?")

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;

}

function divide(x, num2){
    return x / num2;

}

function subtract(num1, num2){
    return num1 - num2;
}

if (operations[index] === "add") {
    
    var result = add(num1, num2)
    console.log(num1 + num2)
} else if (operations[index] === "multiply") {
    
        var result = multiply(num1, num2)
        console.log(num1 * num2)  
} else if (operations[index] === "divide") {
    
        var result = divide(num1, num2)
        console.log(num1 / num2)
} else if (operations[index] === "subtract") {
        
        var result = subtract(num1, num2)
        console.log(num1 - num2)
}

console.log("The result is", (result))

