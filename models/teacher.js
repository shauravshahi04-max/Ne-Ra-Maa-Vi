const teacherSchema = new mongoose.Schema({
  teacherId: String,
  name: String,
  subjects: [String],
  classes: [String],
  password: String,
  salary: Number
});
