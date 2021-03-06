const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			maxLength: [64, "Name can't exceed 64 characters"],
			minLength: [1, "Name has to be at least 1 character"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			maxLength: [256, "Email can't exceed 64 characters"],
			index: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
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

UserSchema.pre("save", async function (next) {
	//arrow function not use because the scope of this keyword changes in that
	if (!this.isModified("password")) next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
