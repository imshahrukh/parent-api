const express = require("express");
const circularController = require("./../controller/SCircularController");
const circularRouter = express.Router();
// POST
// localhost:8000/v1/member

circularRouter.route("/circular").post(circularController.addCircular);
//   .get(applicationController.getAllLeaveApplication);

// POST
// localhost:8000/v1/member/12345

circularRouter.route("/circular/:id").get(circularController.getCircular);
//   .patch(applicationController.updateLeaveApplication)
//   .delete(applicationController.deleteLeaveApplication);
module.exports = circularRouter;
