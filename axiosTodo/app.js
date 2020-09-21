//so basically I'm requesting data to be used on my page or something. I get the data and then I utilize it somewhere on my website. API's provide me and my webpage with info to use.

//nate talks about duplicated lists in the last axios video

//CRUD!

//------------------------------C (Create/Put/POST)------------------------------

const todoForm = document.todoForm

    todoForm.addEventListener("submit", function(event){
        event.preventDefault()
        //parameters for my new to-do item. Axios handles the JSONic configuration
        const newTodo = {
            title: todoForm.title.value,
            description: todoForm.description.value,
            imgUrl: todoForm.imgUrl.value
        }

        axios.post("https://api.vschool.io/zachheckert/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    })

//------------------------------R (Read/Retrieve/GET)------------------------------

    //Test//
    // const newTodo = {
    //     title: "Axios To-do",
    //     description: "I'm posting a new item with Axios.",
    //     imgUrl: "https://images.prismic.io/vschool/0f06215c-8704-42ed-9eda-98a68120b71e_Hero+Img.jpg?auto=format%2Ccompress&fit=max&q=50"
    // }

    axios.get("https://api.vschool.io/zachheckert/todo")
        .then(response => {
            for(let i = 0; i < response.data.length; i++){
                const h5 = document.createElement("h5")
                h5.textContent = response.data[i].title
                document.body.appendChild(h5)
            }
        })
        .catch(error => console.log(error))
        
    axios.get("https://api.vschool.io/zachheckert/todo/")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

//------------------------------U (Update/Modify/PUT)------------------------------
    //This is where I'd put an edit button. Right?
    // const updates = {
    //     title: "TEST - THIS WAS SUCCESSFULLY MODIFIED USING A PUT REQUEST",
    //     completed: true
    // }

    // axios.put("https://api.vschool.io/zachheckert/todo/", updates)
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))

//------------------------------D (Delete/DELETE!)------------------------------

    //!!!!!!!!!!!!!!!(make sure you link it up to your html doc)!!!!!!!!!!!! also getting the id will be important as well, so figure that out: 

    // const button = document.getElementById('delete-button')

    // button.addEventListener("click", function(){
    //     axios.delete("https://api.vschool.io/zachheckert/todo/")
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
    // })

    // axios.delete("https://api.vschool.io/zachheckert/todo/")
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error))
