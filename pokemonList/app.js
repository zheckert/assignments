//https://api.vschool.io/pokemon

const xhr = new XMLHttpRequest()

//I don't think it matters if this is asynchronous, but better safe than sorry.
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        pokeDump(data.results)
        
        function pokeDump(arr){
            const pokemon = data.objects[0].pokemon
            for(let i = 0; i < pokemon.length; i++){
                const p = document.createElement("p")
                p.textContent = pokemon[i].name
                document.body.appendChild(p)
            }
        }
        
    }
}


//data.objects[0].pokemon, but where does it go!?

//?

//https://api.vschool.io/pokemon

// const xhr = new XMLHttpRequest()

// //I don't think it matters if this is asynchronous, but better safe than sorry.
// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata.data)
//         pokeDump(data.results)
//     }
// }

// function pokeDump(arr){
//     for(let i = 0; i < arr.length; i++){
//         const p = document.createElement("p")
//         p.textContent = arr[i].name
//         document.body.appendChild(p)
//     }
// }
