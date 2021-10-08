const express = require("express");
const fineController = require("../controller/SFineController");
const fineRouter = express.Router();
// POST
// localhost:8000/v1/member

fineRouter
  .route("/fine")
  .post(fineController.addFine)
  .get(fineController.getFine);

// POST
// localhost:8000/v1/member/12345

// complaintRouter.route("/teacher/:id").get(complaintController.getComplaint);
//   .patch(applicationController.updateLeaveApplication)
//   .delete(applicationController.deleteLeaveApplication);
module.exports = fineRouter;
