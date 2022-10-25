const BigPromise = require("../middlewares/bigPromise");

exports.getLocationCTM = BigPromise(async (req, res) => {
	const locations = [
		"chennai central",
		"kondapuram",
		"solapur jn",
		"kalyan jn",
		"dadar",
		"mumbai cst",
	];
	var location = locations[Math.floor(Math.random() * locations.length)];
	res.status(200).json({
		success: true,
		location: location,
	});
});

exports.getLocationATB = BigPromise(async (req, res) => {
	const locations = [
		"ahemdabad",
		"vadodara",
		"surat",
		"belapur",
		"solapur",
		"adoni",
		"banglore",
	];
	var location = locations[Math.floor(Math.random() * locations.length)];
	res.status(200).json({
		success: true,
		location: location,
	});
});
exports.getLocationDTP = BigPromise(async (req, res) => {
	const locations = ["new delhi", "bhopal", "bhusawal", "manmad", "pune"];
	var location = locations[Math.floor(Math.random() * locations.length)];
	res.status(200).json({
		success: true,
		location: location,
	});
});
