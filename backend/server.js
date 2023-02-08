const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todo-routes");
const HttpError = require("./models/http-error");

const app = express();
const PORT = 8080;
const dbUrl =
    "mongodb+srv://manish:manish@cluster0.ijw3zif.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(dbUrl)
    .then(() => console.log("Database connected"))
    .catch(() =>
        console.log("Some error occured while connecting to database")
    );

app.use(cors());

app.use(bodyParser.json());

app.use("/api/todos", todoRoutes);

app.use((req, res, next) => {
    const error = new HttpError("Provide route not found!!!", 404);
    return next(error);
});

app.use((error, req, res, next) => {
    res.status(error.code || 500);
    res.json(error.message || "Unexpected error occured!!!");
});

app.listen(PORT, () => {
    console.log("Server started at", PORT);
});
