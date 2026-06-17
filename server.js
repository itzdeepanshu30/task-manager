const Task = require("./models/Task");
require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const app = express();
app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);

app.patch("/tasks/:id", async (req, res) => {
    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.delete("/tasks/:id", async (req, res) => {
    try {

        const task = await Task.findByIdAndDelete(
            req.params.id
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });

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
