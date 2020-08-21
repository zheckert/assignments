const form = document["mom-list"]

form.addEventListener("submit", function(event){
    event.preventDefault()

    const listItem = form.listItem.value

    if (form.listItem.value != ""){
        form.listItem.value = ""
        const li = document.createElement('li')
        document.getElementsByTagName("ul")[0].append(li)

        const div = document.createElement('div')
        div.textContent = listItem
        li.append(div)

        const button1 = document.createElement('button')
        button1.textContent = "edit"
        li.append(button1)

        const button2 = document.createElement('button')
        button2.textContent = "X"
        li.append(button2)
        addEventListener('click', function(e){
            e.target.parentNode.remove()
        })

    }


})
