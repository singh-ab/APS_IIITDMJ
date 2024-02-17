const jwt = require('jsonwebtoken');
const User = require("../models/User");
exports.authenticateToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async(err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        console.log(user);
        const identity = await User.findById(user.userId);
        console.log(identity);

        next();
    });
}