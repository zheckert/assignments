//so basically I'm requesting data to be used on my page or something. I get the data and then I utilize it somewhere on my website. API's provide me and my webpage with info to use.

//Get POSTS to appear asynchronously.

//CRUD!

//------------------------------C (Create/Put/POST)------------------------------

const todoForm = document.todoForm

    todoForm.addEventListener("submit", function(event){
        event.preventDefault()
        //parameters for my new to-do item. Axios handles the JSONic configuration
        const newTodo = {
            title: todoForm.title.value,
            price: todoForm.price.value,
            description: todoForm.description.value,
            imgUrl: todoForm.imgUrl.value
        }

        axios.post("https://api.vschool.io/zachheckert/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    })

//------------------------------R (Read/Retrieve/GET)------------------------------

    axios.get("https://api.vschool.io/zachheckert/todo")
        .then(response => {
            for(let i = 0; i < response.data.length; i++){
                const h5 = document.createElement("h5")
                h5.textContent = response.data[i].title
                document.body.appendChild(h5)

                const pr = document.createElement("p")
                // if(response.data[i].price === BASICALLY I WNAT IT TO NOT SHOW UP IF NO price)
                pr.textContent = `$${response.data[i].price}`
                document.body.appendChild(pr)

                const p = document.createElement("p")
                p.textContent = response.data[i].description
                document.body.appendChild(p)
                // if(response.data[i].imgUrl === BASICALLY I WNAT IT TO NOT SHOW UP IF NO IMG)
                const img = document.createElement("img")
                img.src = response.data[i].imgUrl
                document.body.appendChild(img)

                if(response.data[i].completed === true){
                    h5.style.setProperty("text-decoration", "line-through");
                    p.style.setProperty("text-decoration", "line-through");
                }

                //can I add a delete button here, too?
                const deleteButton = document.createElement("button")
                deleteButton.textContent = "Remove"
                document.body.appendChild(deleteButton)
                    deleteButton.addEventListener("click", function(){
                        axios.delete("https://api.vschool.io/zachheckert/todo/" + response.data[i]._id)
                        .then(alert("Item successfully deleted!"))
                        .catch(alert("There was an error removing your item. Please try again!"))
                    })
            }
        })

//------------------------------U (Update/Modify/PUT)------------------------------
    //This is where I'd put an edit button. Right?

    // axios.put("https://api.vschool.io/zachheckert/todo/", updates)
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))

//------------------------------D (Delete/DELETE!)------------------------------

        //MOVING THIS UP TO THE RELEVANT PLACE ON THE GET STUFF!!!

    //!!!!!!!!!!!!!!!(make sure you link it up to your html doc)!!!!!!!!!!!! also getting the id will be important as well, so figure that out: 

    //I added buttons when "GET-ing", I need to make those buttons functional and make sure they refer to their parent object.


    // axios.delete("https://api.vschool.io/zachheckert/todo/")
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
