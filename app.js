const express = require("express");
require("./utils/db.config");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const PORT = process.env.PORT;
const ejsMate = require("ejs-mate");

dotenv.config({ path: "./.env" });

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
