const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth");

router.get("/register", authController.renderRegisterForm);

router.post("/register", authController.Register);

module.exports = router;
