const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");
require("dotenv").config();
// Define the GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, // Use process.env to get environment variables
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    scope: ['profile', 'email']
},
    function (accessToken, refreshToken, profile, cb) {
        const email = profile._json.email;
        const emailPrefix = email.split('@')[0];

        if (emailPrefix === 'abhinav2003feb') {
            cb(null, profile);
        } else {
            const error = new Error('Email prefix does not match expected value.');
            cb(error);
        }
    }

));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
