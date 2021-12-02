const _Attendance = require("../model/FaceModel");

// Methods
// addAttendance

// to Seach attendance (date,reg)
exports.addFace = async function (req, res) {
  try {
    console.log(req.body);

    const addAttendance = await _Attendance.create(req.body);
    console.log(req.body);

    res.status(201).json({
      status: "success",
      data: {
        face: addAttendance,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
exports.getFaces = async function (req, res) {
  try {
    const addAttendance = await _Attendance.find();

    res.status(201).json({
      status: "success",
      data: {
        face: addAttendance,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
