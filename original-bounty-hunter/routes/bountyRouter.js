const express = require("express")
const bountyRouter = express.Router()
const Bounty = require("../client/models/bounty.js")

bountyRouter.route("/")
    .get((req, res, next) => {
        Bounty.find((error, bounties) => {
            if(error){
                res.status(500)
                return next(error)
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((error, savedBounty) => {
            if(error){
                res.status(500)
                return next(error)
            }
            return res.status(201).send(savedBounty)
        })
    })

// bountyRouter.get("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounty.filter(bounty => bounty._id === bountyId)
//     res.send(foundBounty)
// })

// axios.delete('url.com/bounty/98798')

// const req.params = {
//     bountyId: 98798
// }

//     ///specify target name in the res.send?
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id: req.params.bountyId}, (error, deletedItem) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(`${deletedItem.firstName} eliminated. Database successfully updated.`)
    })
})

bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        { _id: req.params.bountyId },
        req.body,
        { new: true },
        (error, updatedBounty) => {
            if(error){
                res.status(500)
                return next(error)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter


