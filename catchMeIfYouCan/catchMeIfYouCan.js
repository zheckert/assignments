// function sum(x, y){
//     //check data types first and throw error
//     return x + y;
//   }

// try{
//    sum(1, 2)
// } catch(err){
//     console.log(err)
//     throw "This is my custom error";
// }


// var user = {username: "sam", password: "123abc"};
// function login(username, password){
//   if ()
//   console.log("login successful!")
// }

// try{
//     console.log(login("sam", "123abc"))
// } catch(err){
//     console.log(err)
// }

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
}

try {
    if(user.username != "sam" && user.password != "123abc"){
       throw new Error("login failed!")
    } else {
        console.log("login successful!")
    }
}
catch(err){
    console.log(err)
}
