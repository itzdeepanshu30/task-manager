const Task = require("./models/Task");
require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const app = express();
app.use(express.json());

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.post("/tasks", async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title
        });

        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
const PORT = 5000;

connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
});
