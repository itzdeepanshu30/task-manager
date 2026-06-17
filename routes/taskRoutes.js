const express = require("express");
const router = express.Router();

const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

router.get("/", getTasks);
router.get("/:id", getTask);


module.exports = router;