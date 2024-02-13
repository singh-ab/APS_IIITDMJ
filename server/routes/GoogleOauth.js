const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isAuthenticated } = require("../middleware/Auth");
const { LoginFail, Logout, log } = require("../controllers/AuthController");
require("dotenv").config();


//Routes for google Authentication
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed/login', successRedirect: `${process.env.CLIENT}/dashboard` }));

//Routes for failed login , logout , and checking the email Id of the user (if logged in ) 
router.route('/failed/login').get(LoginFail);
router.route("/logout").get(Logout);
router.route("/log").get(log);

module.exports = router;
