const express = require("express");
const { signup } = require("../controllers/User_controllers");
const router = express.Router();

router.route("/signup").get(signup);
module.exports = router;
