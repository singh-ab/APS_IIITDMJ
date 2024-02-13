// middleware/Authentication.js

exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({
            logged: "Unauthorized user"
        });
    }
};
