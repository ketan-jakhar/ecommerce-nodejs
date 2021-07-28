const User = require("../modules/users/models/User");
const { addUser } = require("../modules/users/service/userService");

exports.renderRegisterForm = (req, res) => {
	return res.render("register", {
		message: null,
	});
};

exports.Register = async (req, res) => {
	try {
		const user = await addUser(req.body);
		return res.render("register", {
			message: "Registration successfully completed!",
		});
	} catch (err) {
		console.log(err);
		return res
			.status(400)
			.render("register", { message: "Something went wrong!" });
	}
};
