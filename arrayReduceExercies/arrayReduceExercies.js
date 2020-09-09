// function total(arr) {
//     return arr.reduce(function(final, num){
//         final += num
//         return final
//     })
//  }
 
//  console.log(total([1,2,3])); // 6

//I need to concatenate the items in an array with reduce.

//First I create a function and call the array and append the reduce function.

//I can probably format it in such a way that I can use an arrow function.

//Next I need to do the guts of the function. What does reduce do? It simplifies data. So I just need to rewrite the information with no ,.

//Next return the result so it's not undefined.

//I'm going to cite the following 'Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.'

//but how will I do it with reduce? It seems needlessly complex.

// function stringConcat(arr) {
//     return arr.join("");
// }
//  console.log(stringConcat([1,2,3])); // "123"

// function totalVotes(arr) {
//     return arr.reduce(function(final, voters){
//         if(voters.voted){
//             final++
//         }
//         return final
//     }, 0)
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7

// function shoppingSpree(arr) {
//     return arr.reduce(function(sum, wishlist){
//         return sum + wishlist.price
//     }, 0)
//  }
 
// function shoppingSpree(arr) {
//     return arr.reduce((sum, wishlist) => sum + wishlist.price, 0)
//  }

//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky-sack", price: 5 },
//      { title: "Gold fidget spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
                                                                //  console.log(shoppingSpree(wishlist)); // 227005

                                                                //  function flatten(arr) {
                                                                //     return arr.reduce(function(flatten, array){
                                                                //         let final = array.concat(flatten)
                                                                //         return final.reverse()
                                                                //     })   
                                                                //  }


// function flatten(arr) {
//     return arr.reduce((flatten, array) => flatten.concat(array))   
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

/*So I think I can do this in two passes, yeah? Maybe three? so first I need to determine if someone voted. If they did, they need to be organized according to their age. If  

Wait. No, they just want me to tally up votes and organize them based on age. So first we check and see if they voted. If they did and their age is x, they're put into one of 6 categories.

*/

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// function voterResults(arr) {
//     return arr.reduce(function(total, voter){
//      if(voter.voted === true && voter.age < 25){
//          total.numYoungVotes++
//      } else if(voter.voted === true && voter.age >= 26 && voter.age <= 35){
//          total.numMidVotes++
//      } else if(voter.voted === true && voter.age >= 36){
//          total.numOldVotes++
//      }
//      if(voter.age <= 25){
//          total.numYoungPeople++
//      } else if(voter.age > 25 && voter.age <= 35){
//          total.numMidPeople++
//      } else if(voter.age >= 36){
//          total.numOldPeople++
//      }
//      return total;
//     })
//  }
//  let total = {
//      numYoungVotes: 0,
//      numYoungPeople: 0,
//      numMidVotes: 0,
//      numMidPeople: 0,
//      numOldVotes: 0,
//      numOldPeople: 0,
//  }
 

function voterResults(arr) {
    return arr.reduce(function(total, voter){
     if(voter.voted && voter.age <= 25){
         total.numYoungVotes++
     } else if(voter.voted && voter.age > 25 && voter.age <= 35){
       console.log(voter.name)
         total.numMidVotes++
     } else if(voter.voted && voter.age >= 36){
         total.numOldVotes++
     }
     if(voter.age <= 25){
         total.numYoungPeople++
     } else if(voter.age > 25 && voter.age <= 35){
         total.numMidPeople++
     } else if(voter.age >= 36){
         total.numOldPeople++
     }
     return total;
    }, {
     numYoungVotes: 0,
     numYoungPeople: 0,
     numMidVotes: 0,
     numMidPeople: 0,
     numOldVotes: 0,
     numOldPeople: 0,
    })
   }

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/