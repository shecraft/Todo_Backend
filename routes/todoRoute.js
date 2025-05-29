const express = require("express")
const { addTodo, getAllTodo, deleteTodo } = require("../controller/todoControllers")
const todoRoute = express.Router()

todoRoute.post("/", addTodo)
todoRoute.get("/", getAllTodo)
todoRoute.delete("/:id", deleteTodo)
module.exports = todoRoute    