// function collectAnimals(...animals) {  
//     return console.log(animals);
// }
// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit, sweets, vegetables}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])

// console.log(combineFruit(["apple", "pear"],
// ["cake", "pie"],
// ["carrot"]))
// => {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrit"]
//      }

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };

//   function parseSentence({ location, duration } = vacation){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

//   console.log(parseSentence())

// function returnFirst(items){
//   const [firstItem] = items; /*change this line to be es6*/
//   return firstItem
// }

//https://coursework.vschool.io/es6-basics/#destructuringarrays

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = favoriteActivities
    
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

// function combineAnimals() {  
//  return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function product(a, b, c, d, e) {  
//   var numbers = [a,b,c,d,e];

//   // Is const [a,b,c,d,e] = numbers better?

//   return numbers.reduce((acc, number) => acc * number, 1)
// }

// function unshift(array, ...a, b, c, d, e) {  
//   return [ ...array, ...a, b, c, d, e];
// }

function populatePeople(names){
  return names.map((name) => {
      name = name.split(" ");
    const [firstName, lastName] = name;
      return {
          firstName, lastName
      }
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]