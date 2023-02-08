const Todo = require("../models/todo-model");
const HttpError = require("../models/http-error");

const getAllTodoItem = async (req, res, next) => {
    const todos = await Todo.find().exec();

    res.json({ todos });
};

const addTodoItem = async (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const completed = req.body.completed || false;

    if (
        !title ||
        title.length === 0 ||
        !description ||
        description.length === 0
    ) {
        const error = new HttpError(
            "Please provide title and description.",
            422
        );
        return next(error);
    }
    const createdTodo = new Todo({
        title,
        createdAt: new Date(),
        description,
        completed,
    });

    const result = await createdTodo.save();
    res.json({ message: "Todo created.", data: result });
};

const deleteTodoById = async (req, res, next) => {
    const todoId = req.params.tid;

    const existingTodo = await Todo.findById(todoId).exec();
    if (!existingTodo) {
        const error = new HttpError("Todo not found for provided id.", 404);
        return next(error);
    }

    const result = await Todo.deleteOne({ _id: todoId });
    res.json({ message: "Todo deleted.", data: result });
};

const updateTodoById = async (req, res, next) => {
    const todoId = req.params.tid;
    const title = req.body.title;
    const description = req.body.description;
    const updatedTodo = { title, description, createdAt: new Date() };

    const existingTodo = await Todo.findById(todoId).exec();
    if (!existingTodo) {
        const error = new HttpError("Todo not found for provided id.", 404);
        return next(error);
    }

    if (
        !title ||
        title.length === 0 ||
        !description ||
        description.length === 0
    ) {
        const error = new HttpError(
            "Please provide title and description.",
            422
        );
        return next(error);
    }

    const result = await Todo.updateOne({ _id: todoId }, updatedTodo);
    res.json({ message: "Todo updated.", data: result });
};

exports.getAllTodoItem = getAllTodoItem;
exports.addTodoItem = addTodoItem;
exports.deleteTodoById = deleteTodoById;
exports.updateTodoById = updateTodoById;
