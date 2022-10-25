const express = require("express");
const router = express.Router();

const {
	getLocationCTM,
	getLocationATB,
	getLocationDTP,
} = require("../controllers/trackerController");

router.route("/getLocationCTM").get(getLocationCTM);
router.route("/getLocationATB").get(getLocationATB);
router.route("/getLocationDTP").get(getLocationDTP);

module.exports = router;
