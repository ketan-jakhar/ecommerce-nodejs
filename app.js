const express = require("express");
require("./config/db.config");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const PORT = process.env.PORT;
const ejsMate = require("ejs-mate");
const userRoutes = require("./routes/User");

dotenv.config({ path: "./.env" });

app.use(express.urlencoded({ extended: true }));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRoutes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
