const mongoose = require("mongoose");

const FaceAttendance = new mongoose.Schema({
  RegNo: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("FaceAttendance", FaceAttendance);
