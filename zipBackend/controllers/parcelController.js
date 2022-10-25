const BigPromise = require("../middlewares/bigPromise");
const Parcel = require("../models/parcel");

exports.addParcel = BigPromise(async (req, res) => {
	const { category, owner, from, to } = req.body;

	const parcel = await Parcel.create({
		category,
		owner,
		from,
		to,
	});

	res.status(200).json({
		success: true,
		message: "parcel added to the database",
		parcel,
	});
});

exports.getparcel = BigPromise(async (req, res) => {
	const { id } = req.params;

	const parcel = await Parcel.findById(id);

	res.status(200).json({
		success: true,
		parcel,
	});
});
