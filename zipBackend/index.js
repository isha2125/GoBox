const app = require("./app");
require("dotenv").config();
const connectWithDb = require("./config/db");

// connect with database
connectWithDb();

// running the server
app.listen(process.env.PORT, () => {
	console.log(
		`server is running at port: http://localhost:${process.env.PORT}`
	);
});
