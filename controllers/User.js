const User = require("../models/User");

exports.renderRegisterForm = (req, res) => {
	return res.render("register", {
		message: "",
	});
};

exports.RegisterForm = async (req, res) => {
	const user = new User(req.body);
	await user.save();
	return res.render("register", {
		message: "Registration successfully completed!",
	});
};
