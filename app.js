const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

dotenv.config({ path: "./.env" });

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
