const express = require("express")
const todoRouter = express.Router()
const { v4: uuid } = require("uuid");

const todo = [
    {
        name: "Complete V School", 
        description: "Finish V School's curriculum and master full stack development", 
        completed: false, 
        _id: uuid()
    },
    {
        name: "Find a job", 
        description: "Become gainfully employed", 
        completed: false, 
        _id: uuid()
    },
    {
        name: "Have a baby", 
        description: "Make sure baby number 3 has a nice entry into our world", 
        completed: false, 
        _id: uuid()
    },
]

todoRouter.route("/")
    .get((req, res) => {
        // console.log(req)
        // console.log(res)
        res.send(todo)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todo.push(newTodo)
        res.send(`"${newTodo.name}" added to to-do list.`)
    })

todoRouter.put("/:todoId", (req, res) => {

    const todoId = req.params.todoId
    const updatedIndex = req.body
    const todoIndex = todo.findIndex(todo => todo._id ===todoId)
    const updatedTodo = Object.assign(todo[todoIndex], updatedIndex)
    res.send(updatedTodo)
})

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todo.filter(todo => todo._id === todoId)
    res.send(foundTodo)
})

//how do I call this id by name?
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todo.findIndex(todo => todo._id === todoId)
    const todoName = todo[todoIndex].name
    res.send(`"${todoName}" has been removed from list.`)
})

module.exports = todoRouter