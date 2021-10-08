const _Fine = require("../model/Fine");

// Methods
// addLeaveApplication

exports.addFine = async function (req, res) {
  try {
    console.log(req.body);
    const fine = await _Fine.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        fine: fine,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

// get All memebers
exports.getFine = async function (req, res) {
  try {
    var query = require("url").parse(req.url, true).query;
    var regNo = query.RegNo;

    var fine = await _Fine.find({ RegNo: regNo }).populate("violations");

    res.status(201).json({
      status: "success",

      data: {
        fine: fine,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
