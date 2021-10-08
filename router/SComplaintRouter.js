const express = require("express");
const complaintController = require("../controller/SComplaintController");
const complaintRouter = express.Router();
// POST
// localhost:8000/v1/member

complaintRouter.route("/complaint").post(complaintController.addComplaint);
//   .get(applicationController.getAllLeaveApplication);

// POST
// localhost:8000/v1/member/12345

complaintRouter.route("/complaint/:id").get(complaintController.getComplaint);
//   .patch(applicationController.updateLeaveApplication)
//   .delete(applicationController.deleteLeaveApplication);
module.exports = complaintRouter;
