const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  username: {
    type: String,
    ref: "User",
    required: true,
  },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
