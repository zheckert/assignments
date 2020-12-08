const express = require("express")
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

module.exports = bountyRouter



