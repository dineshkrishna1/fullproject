const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router");
// const multer = require("multer");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/api", router);
mongoose
  .connect("mongodb://127.0.0.1:27017/cash_details")
  .then(() => {
    console.log("db is connected");
  })
  .catch(() => {
    console.log("db is not connected");
  });
  app.listen(2007, () => {
    console.log("server is connected:2007");
  });
//img
// const mystr = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./upload");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + " " + file.originalname);
//   },
// });



// img
// const upload = multer({
//   storage: mystr,
// });

// app.post("/api", upload.single("image"), (req, res) => {
//   try {
//     res.json("file succesfully submited");
//   } catch (error) {
//     res.json("error");
//   }
// });
