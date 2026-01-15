const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  class: String,
  section: String,
  password: String,
  attendance: Number,
  feesStatus: String
});

module.exports = mongoose.model("Student", studentSchema);
