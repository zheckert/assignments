// function doubleNumbers(arr){
//   return arr.map(num => num *2)
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// function stringItUp(arr){
//   return arr.map(num => num.toString())

// }

// console.log(stringItUp([2, 5, 100]));

// function capitalizeNames(arr){
//   return arr.map(str =>  str.charAt(0).toUpperCase() + str.toLowerCase(0))
// }

// within map- I want to uppercase the first letter, and combine that with a lowercased version of the rest. Then, I want to remove the extra letter.

// function capitalizeNames(arr){
//   return arr.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase())
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// function namesOnly(arr){
//   return arr.map(names => names.name)
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 

// function makeStrings(arr){
//   return arr.map(matrix => {
//     if(matrix.age < 18){
//       return `${matrix.name} is too young to see "The Matrix". Maybe they could watch "Pokemon: The Movie" instead?`
//     } else {
//       return `${matrix.name} can go to "The Matrix!"`
//     }
    
//   }
//   )
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 

function readyToPutInTheDOM(arr){
  return arr.map(dom => {
    return `<h1>${dom.name}</h1>` + `<h2>${dom.age}</h2>`
  })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 