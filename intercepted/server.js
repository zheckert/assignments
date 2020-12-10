const express = require("express")
const app = express()
const { v4: uuid } = require("uuid");

app.use(express.json())

app.use("/intercepted", (req, res, next) => {
    console.log("Success")
    next()
})

app.use("/intercepted", (req, res, next) => {
    console.log("Activating...")
    req.body = 
        {
            name: "Bob",
            last: "Ziroll",
            memo: "I've completed the assignment?",
            status: true,
            _id: uuid(),
        }
    next()
})

app.get("/intercepted", (req, res, next) => {
    console.log("Activated. Prepare for transmission")
    res.send(req.body)
})

app.listen(9001, () => {
    console.log("Server is running on port 9001")
})