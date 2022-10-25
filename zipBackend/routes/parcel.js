const express = require("express");
const router = express.Router();

const { addParcel, getparcel } = require("../controllers/parcelController");

router.route("/addparcel").post(addParcel);
router.route("/getparcel/:id").get(getparcel);

module.exports = router;
