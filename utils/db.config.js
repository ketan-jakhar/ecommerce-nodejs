const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

mongoose.connection.once("open", () => {
	console.log("Database connected");
});
