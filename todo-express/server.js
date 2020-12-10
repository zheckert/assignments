const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))
app.use("/todo", require("./routes/todoRouter"))

app.listen(9001, () => {
    console.log("The server is running on Port 9001")
})

// allows the user to delete a todo by its _id, and


//Done
// allows the user to update a todo by its _id,
// returns the entire list of todos,
// allows new todo items to be posted to the array,
// allows the user retrieve a single todo by its _id.

