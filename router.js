const express = require("express");
const {
  post_data,
  post_data2,
  get_data,
  get_data2,
  post_data1,
  get_data1,
  delete_data1,
  delete_data2,
  delete_data3,
  delete_data4,
  delete_data5,
  delete_data6,
  delete_data7,
  update_data,
get_up5,
get_up6,
get_up7,
  get_up,
  get_up2,
  

  update_data3,
  update_data4,
  update_data5,
  update_data6,
  update_data7,
  update_data2,
  post_data3,
  get_data3,
  get_data4,
  get_up3,
  post_data4,
  post_data5,
  post_data6,
  post_data7,
  get_up4,
  get_data5,
  get_data6,
  get_data7,
} = require("./crud");

const router = express.Router();

router.post("/create", post_data);
router.get("/read", get_data);
router.get("/read1/:id", get_up);
router.get("/read2/:id",get_up2);
router.get("/read3/:id",get_up3);
router.get("/read4/:id",get_up4);
router.get("/read5/:id",get_up5);
router.get("/read6/:id",get_up6);
router.get("/read7/:id",get_up7);
router.post("/create1", post_data1);
router.post("/create2",post_data2);
router.post("/create3",post_data3);
router.post("/create4",post_data4);
router.post("/create5",post_data5);
router.post("/create6",post_data6);
router.post("/create7",post_data7);
router.get("/read1", get_data1);
router.get("/read2",get_data2);
router.get("/read3",get_data3);
router.get("/read4",get_data4);
router.get("/read5",get_data5);
router.get("/read6",get_data6);
router.get("/read7",get_data7);
router.delete("/delete1/:id", delete_data1);
router.delete("/delete2/:id", delete_data2);
router.delete("/delete3/:id", delete_data3);
router.delete("/delete4/:id",delete_data4);
router.delete("/delete5/:id",delete_data5);
router.delete("/delete6/:id",delete_data6);
router.delete("/delete7/:id",delete_data7);
router.put("/update/:id", update_data);
router.put("/update2/:id", update_data2);
router.put("/update3/:id", update_data3);
router.put("/update/:id",update_data4);
router.put("/update5/:id",update_data5);
router.put("/update6/:id",update_data6);
router.put("/update7/:id",update_data7);
module.exports = router;
