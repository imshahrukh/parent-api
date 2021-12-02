const mongoose = require("mongoose");

const Admin = new mongoose.Schema(
  {
    RegNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Admin", Admin);
