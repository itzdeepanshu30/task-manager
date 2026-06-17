const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
    minlength: [3, "Title must be at least 3 characters"],
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
