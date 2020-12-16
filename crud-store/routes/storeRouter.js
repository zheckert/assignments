const express = require("express")
const storeRouter = express.Router()
const Store = require("../client/models/store.js")

storeRouter.get("/", (req, res, next) => {
    Store.find((error, items) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(200).send(items)
    })
})

storeRouter.post("/", (req, res, next) => {
    const newItem = new Store(req.body)
    newItem.save((error, savedItem) => {
        if(error){
            res.status(500)
            return next(error)
        }
        return res.status(201).send(savedItem)
    })
})

storeRouter.delete("/:storeId", (req, res, next) => {
    Store.findOneAndDelete(
        { _id: req.params.storeId }, 
        (error, deletedItem) => {
            if(error){
                res.status(500)
                return next(error)
            }
            return res.status(200).send(`"${deletedItem.name}" has been successfully removed from the database.`)
    })
})

storeRouter.put("/:storeId", (req, res, next) => {
    Store.findOneAndUpdate(
        { _id: req.params.storeId }, 
        req.body, 
        { new: true }, 
        (error, modifiedItem) => {
            if(error){
                res.status(500)
                return next(error)
            }
            console.log(modifiedItem)
            return res.status(201).send(modifiedItem)   
    })
})

module.exports = storeRouter