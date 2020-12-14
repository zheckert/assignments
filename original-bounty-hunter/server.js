const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/bounty-database", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Successfully connected to the database")
    )

app.use("/bounty", require("./routes/bountyRouter"))

app.listen(9001, () => {
    console.log("The server is running on Port 9001")
})