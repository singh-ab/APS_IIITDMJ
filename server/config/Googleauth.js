const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");

// Define the GoogleStrategy
passport.use(new GoogleStrategy({
    clientID: '214576220859-2jl28ussbbhl5de8uuqll1moa72dkcob.apps.googleusercontent.com', // Use process.env to get environment variables
    clientSecret: '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',
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
