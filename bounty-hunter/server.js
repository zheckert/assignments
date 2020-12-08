const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounty", require("./routes/bountyRouter"))

app.listen(9001, () => {
    console.log("The server is running on Port 9001")
})