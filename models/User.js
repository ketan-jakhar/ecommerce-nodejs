const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema(
	{
		name: {
			type: String,
			required: [true, "Name is reuired"],
			maxLength: [64, "Name can't exceed 64 characters"],
			minLength: [1, "Name has to be at least 1 character"],
		},
		email: {
			type: String,
			required: [true, "Email is reuired"],
			maxLength: [256, "Email can't exceed 64 characters"],
			index: true,
		},
		password: {
			type: String,
			required: [true, "Password is reuired"],
			minLength: [8, "Password has to be atleast 8 characters"],
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
