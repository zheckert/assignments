var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

let arr = [];
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const notALetter = ' \\\' "(){}!@#$%^&*()1234567890-_=+|":;<>,.?/~`'

hailCaesar = () => {
    for (let i = 0; i < input.length; i++){
        if(notALetter.includes(input[i])){
            arr.push(input[i])
            continue;
        }
        let newNums = alphabet.indexOf((input[i])) + shift 
            if(newNums >= 26){
                arr.push(alphabet[newNums - 26])
            }else{
                arr.push(alphabet[newNums])
            }
    }
    return arr.join("")
}

console.log(hailCaesar())



