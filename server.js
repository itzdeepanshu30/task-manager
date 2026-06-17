const Task = require("./models/Task");
require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const app = express();
app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);
const PORT = 5000;

connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server running on port 5000");
    });
});
