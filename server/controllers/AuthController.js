require("dotenv").config();
exports.LoginFail = (req, res) => {
    try {
        res.status(401).json({
            message: "You are unauthorized"
        });
    } catch (error) {
        res.status(501).json({
            message: "Internal server error"
        });
    }
};

exports.Logout = (req, res, next) => {
    try {
        req.logout((err) => {
            if (err) { return next(err); }
            res.redirect(`${process.env.CLIENT}/login`);
        });
    } catch (error) {
        res.status(501).json({
            message: "Internal server error"
        });
    }
};

exports.log = (req, res) => {
    try {
        if (req.isAuthenticated()) {
            res.status(200).json({
                logged: req.user._json.email
            });
        }
        else {
            res.status(401).json({
                message : "You are unauthorized !"
            })
        }
    } catch (error) {
        res.status(501).json({
            message: "Internal server error"
        });
    }
}