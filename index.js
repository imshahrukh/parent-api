const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const morgan = require("morgan");
const { use } = require("./router/member_router");

// Middlwares
const app = express();
app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));

// .env
const port = process.env.PORT || 8000;

// connection
mongoose
  .connect(process.env.DATABASE_CONNECTION_LIVE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log(process.env.DATABASE_CONNECTION_LIVE))
  .catch((er) => console.log(er));

// call routers
// Smart School
app.use("/v1", require("./router/SAttendanceRouter"));
app.use("/v1", require("./router/SHomeworkRouter"));
app.use("/v1", require("./router/SLeaveApplication"));
app.use("/v1", require("./router/SStudentRouter"));
app.use("/v1", require("./router/SComplaintRouter"));
app.use("/v1", require("./router/STeacherRouter"));
app.use("/v1", require("./router/SCircularRouter"));
app.use("/v1", require("./router/SViolationRouter"));
app.use("/v1", require("./router/SFineRouter"));

// localhost:3000/v1/member
app.use("/v1", require("./router/member_router"));
// localhost:3000/v1/login
app.use("/v1", require("./router/login_router"));
// information
app.get("/", (req, res) => {
  console.log("data");
  res.status(200).json({
    message: "Api Working",
  });
});
app.listen(port, () => {
  console.log("server Activited");
});
