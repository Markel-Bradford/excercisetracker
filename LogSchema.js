const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  username: {
    type: String,
    ref: "User",
    required: true,
  },
  count: Number,
  log: [
    {
      type: String,
      duration: Number,
      date: String,
      ref: "Exercise"
    },
  ],
});

module.exports = mongoose.model('Log', LogSchema)