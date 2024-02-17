const express = require("express");
const {  login } = require("../controllers/User_controllers");
const router = express.Router();

router.route("/login").post(login);
module.exports = router;
