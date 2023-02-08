const mongoose = require("mongoose");

const Todo = mongoose.Schema({
    title: String,
    description: String,
    createdAt: String,
    completed: Boolean,
});

module.exports = mongoose.model("Todos", Todo);
