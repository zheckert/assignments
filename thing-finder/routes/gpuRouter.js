const express = require("express")
const gpuRouter = express.Router()
const { v4: uuid } = require("uuid");

const gpu = [
    {
        name: "Gforce RTX 3090",
        manufacturer: "Nvidia",
        _id: uuid(),
    }
    ,
    {
        name: "Gforce RTX 3080",
        manufacturer: "Nvidia",
        _id: uuid(),
    },
    {
        name: "Gforce RTX 3070",
        manufacturer: "Nvidia",
        _id: uuid(),
    },
    {
        name: "Radeon RX 6900 XT",
        manufacturer: "AMD",
        _id: uuid(),
    },
    {
        name: "Radeon RX 6800 XT",
        manufacturer: "AMD",
        _id: uuid(),
    },
    {
        name: "Radeon RX 6800",
        manufacturer: "AMD",
        _id: uuid(),
    }
]

gpuRouter.route("/")
    .get((req, res) => {
        res.send(gpu)
    })
    .post((req, res) => {
        // console.log(res.body)
        const newGpu = req.body
        newGpu._id = uuid()
        gpu.push(newGpu)
        res.send(`New graphics card ${newGpu.name} added to list successfully.`)
    })

gpuRouter.get("/search/manufacturer", (req, res) => {
    const manufacturer = req.query.manufacturer
    const manufilter = gpu.filter( gpu => gpu.manufacturer === manufacturer)
    res.send(manufilter)
})

module.exports = gpuRouter
