const express = require("express");

const todoControllers = require("../controllers/todo-controllers");

const router = express.Router();

router.get("/", todoControllers.getAllTodoItem);

router.post("/add-todo", todoControllers.addTodoItem);

router.delete("/:tid", todoControllers.deleteTodoById);

router.patch("/:tid", todoControllers.updateTodoById);

module.exports = router;
