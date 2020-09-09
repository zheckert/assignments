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
 
function sortedOfAge(arr){
    return arr.filter(function(num){
        if(num.age > 18){
            peopleArray.sort({
                //x
            })
        }
    })
}
 
 console.log(sortedOfAge(peopleArray));
 return
 

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