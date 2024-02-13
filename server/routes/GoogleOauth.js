const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isAuthenticated } = require("../middleware/Authentication");

router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failed/login', successRedirect: 'http://localhost:5173/dashboard' }));

router.get('/failed/login', (req, res) => {
    res.status(401).json({
        message: "You are unauthorized"
    });
});

router.get("/logout", (req, res, next) => {
    req.logout((err)=> {
        if (err) { return next(err); }
        res.redirect('http://localhost:5173/login');
    });
});


router.get("/email", isAuthenticated,(req, res) => {
    res.status(200).json({
        logged:  req.user._json.email 
    });
});

module.exports = router;
