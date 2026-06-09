require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.send("Get all tasks");
});

app.post("/tasks", (req, res) => {
  console.log(req.body);

  res.send("Task created");
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
