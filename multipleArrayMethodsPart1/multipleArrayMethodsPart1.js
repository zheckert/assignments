var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

/*So we have to do three things. First, we need to filter this list to only show people older than 18. Next, we need to make sure it's sorted by alphabetical order, 
and finally, it needs to be outputted to look like an HTML li item. Make sure you return it, right?*/ 

// function sortedOfAge(arr){
//     return arr.filter(function(num){
//         if(num.age > 18){
//             arr.sort()
//             return arr;
//         }
//     })
// }
 
//I want it to return it so it LOOKS like an html item, so I need to use strings. So we need to return something wrapped in `<li>${asdf}<li>`

// function sortedOfAge(arr){
//     return arr.filter(function(num){
//         if(num.age > 18){
//             return peopleArray.sort((a, b) => a.lastName - b.lastName)
//         }
//     })
// }
 
// function sortedOfAge(arr){
//     return arr.filter(function(num){
//         if(num.age > 18){
//             return peopleArray
//         }
//     }).sort((a, b) => a.lastName - b.lastName)
// }
//  console.log(sortedOfAge(peopleArray));

 function sortedOfAge(arr){
    return arr.filter(num => num.age > 18).sort((a, b) =>{ 
        if ( a.lastName < b.lastName ){
        return -1;
      }
      if ( a.lastName > b.lastName ){
        return 1;
      }
      return 0;}).map(li => `<li>${li.firstName} ${li.lastName} is ${li.age} years old.<li>`)
    }

 console.log(sortedOfAge(peopleArray));

/*
 Output: 
 [ 
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>" 
 ]
 */