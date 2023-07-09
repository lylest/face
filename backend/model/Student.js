const mongoose = require("mongoose")

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    admissionNo: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
)

const Students = mongoose.model("students", studentSchema)

module.exports = {
  Students
}
