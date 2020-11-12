
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        pokeDump(data.results)
        
        function pokeDump(){
            const pokemon = data.objects[0].pokemon
            for(let i = 0; i < pokemon.length; i++){
                const p = document.createElement("p")
                p.textContent = pokemon[i].name
                document.body.appendChild(p)
            }
        }
        
    }
}