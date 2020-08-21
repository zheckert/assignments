//Practice is from https://coursework.vschool.io/intro-to-using-loops-and-arrays-together/

// 1
// var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]

//   let hooray = 0;
  
//   for (let i = 0; i < eventsAtWork.length; i++)
//     if (eventsAtWork[i] === "party")
//     console.log("Hooray!")

// 2
// var booleans = [true, true, false, true, false, false, false]

//   let truth = 0

//   for (let i = 0; i < booleans.length; i++)
//     if (booleans[i] === true)
//       truth++;
//       console.log(truth);

//3
// var users = [
//   {
//     name: "Sophie",
//     age: 12
//   },
//   {
//     name: "Larry",
//     age: 32
//   },
//   {
//     name: "Cathy",
//     age: 40
//   }
// ]

// users.forEach(function (adminAdder) {
//   adminAdder.isAdmin = "true";
// });

// console.log(users)


//The following problems are from https://coursework.vschool.io/loops-and-arrays-practice/

//1

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

//   let computer = 0;

//   for(let i = 0; i < officeItems.length; i++)
//     if (officeItems[i] === "computer")
//       computer++;
//   console.log(computer);

//2
//
var peopleWhoWantToSeeMadMaxFuryRoad = [

  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is too young to see Mad Max!") 
    
  }
}