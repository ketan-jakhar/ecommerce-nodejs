const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

router.get("/register", userController.renderRegisterForm);

router.post("/register", userController.RegisterForm);

module.exports = router;
