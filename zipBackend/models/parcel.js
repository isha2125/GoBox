const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	category: {
		type: String,
		required: [true, "please provide parcel category"],
		trim: true,
		maxlength: [20, "product name should not be more than 20 chanracters"],
	},
	owner: {
		type: String,
		required: [true, "please provide owner name"],
		trim: true,
		maxlength: [30, "owner name should not be more than 30 chanracters"],
	},
	from: {
		type: String,
		required: [true, "please provide address from the parcel to be sent from"],
		trim: true,
		maxlength: [60, "address should not be more than 60 chanracters"],
	},
	to: {
		type: String,
		required: [true, "please provide delivery address"],
		trim: true,
		maxlength: [60, "address should not be more than 60 chanracters"],
	},
});

module.exports = mongoose.model("Parcel", productSchema);
