const express = require("express");
require("dotenv").config();
const app = express();
const morgan = require("morgan");

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// morgan middleware
app.use(morgan("tiny"));

// Importing all routes here
const home = require("./routes/home");
const tracker = require("./routes/tracker");
const parcel = require("./routes/parcel");
const user = require("./routes/user");

// router middleware
app.use("/api/v1", home);
app.use("/api/v1", parcel);
app.use("/api/v1", tracker);
app.use("/api/v1", user);

app.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		message: "welcome to home page!",
	});
});

//exporting app.js
module.exports = app;
