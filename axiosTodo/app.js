//CRUD!
refresher()

const todoForm = document.todoForm

    todoForm.addEventListener("submit", function(event){
        event.preventDefault()

        const newTodo = {
            title: todoForm.title.value,
            price: todoForm.price.value,
            description: todoForm.description.value,
            imgUrl: todoForm.imgUrl.value
        }

        axios.post("https://api.vschool.io/nickblack2/todo", newTodo)
        .then(() => {    
            wipe()
            refresher()
        })
        .catch(error => (error))
        
    })

function refresher(){
    axios.get("https://api.vschool.io/nickblack2/todo")
            .then(response => {

                for(let i = 0; i < response.data.length; i++){

                    const wrapper = document.createElement("div")
                    wrapper.className = "todoItem"
                    document.getElementById("list").appendChild(wrapper)

                    const h5 = document.createElement("h5")
                    h5.textContent = response.data[i].title
                    wrapper.appendChild(h5)

                    const pr = document.createElement("p")
                    pr.textContent = response.data[i].price === undefined ? "" : `$${response.data[i].price}`
                    wrapper.appendChild(pr)

                    const p = document.createElement("p")
                    p.textContent = response.data[i].description
                    wrapper.appendChild(p)

                    const img = document.createElement("img")
                    img.src = "https://placekitten.com/150/150"
                    wrapper.appendChild(img)
                    
                    if(!(response.data[i].imgUrl === undefined || response.data[i].imgUrl === "")){
                        img.src = response.data[i].imgUrl
                    }
                    
                    if(response.data[i].completed === true){
                        h5.style.setProperty("text-decoration", "line-through");
                        pr.style.setProperty("text-decoration", "line-through");
                        p.style.setProperty("text-decoration", "line-through");
                    }

                    const deleteButton = document.createElement("button")
                    deleteButton.textContent = "Remove"
                    wrapper.appendChild(deleteButton)
                        deleteButton.addEventListener("click", function(){
                            axios.delete("https://api.vschool.io/nickblack2/todo/" + response.data[i]._id)
                            .then(() => {
                                wipe()
                                refresher()
                                alert("Item successfully deleted!")
                        })
                            .catch(() => alert("There was an error removing your item. Please try again!"))
                    })
                }
            })

}

function wipe(){
    let barf = document.getElementsByClassName("todoItem")
    for(let i = 0; i < barf.length; i++)
        barf[i].remove()
}
    
/* 
take a brief look at the img const (it's still appearing!)

discuss asynchronicity. Not at length

how would we use a for loop to solve this problem?

*/