const express = require("/express")
const bountyRouter = express.Router()
const { v4: uuid } = require("uuid")

const bounty = [
    {
        firstName: "Boba",
        lastName: "Fett",
        living: true,
        bountyAmount: 0,
        isJedi: false, 
        _id: uuid()
    },
    {
        firstName: "Jar Jar",
        lastName: "Binks",
        living: true,
        bountyAmount: 0,
        isJedi: false, 
        _id: uuid()
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 0,
        isJedi: true, 
        _id: uuid()
    },
    {
        firstName: "Chewbacca",
        lastName: "Fett",
        living: true,
        bountyAmount: 0,
        isJedi: false, 
        _id: uuid()
    },
    {
        firstName: "Han",
        lastName: "Solo",
        living: true,
        bountyAmount: 0,
        isJedi: false, 
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bountyAmount: 0,
        isJedi: false, 
        _id: uuid()
    },
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounty)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounty.push(newBounty)
        res.send(`Successfully added ${newBounty.name} to the hitlist.`)
    })

bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounty.filter(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

    ///specify target name in the res.send?
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    bounty.splice(bountyIndex, 1)
    res.send("Target eliminated. On to the next one.")
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updatedList = req.body
    const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounty[bountyIndex], updatedList)
    res.send(updatedBounty)
})

module.exports = bountyRouter



