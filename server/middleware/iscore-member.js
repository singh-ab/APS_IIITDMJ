const jwt = require('jsonwebtoken');
const User = require("../models/User");

exports.isSuperuser = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        const identity = await User.findById(decoded.userId);

        if (!identity || identity.status !== 'core-member') {
            return res.status(401).json({
                success: false,
                message: "Aukaat nhi h teri abhi itni !"
            });
        }

        next();
    } catch (error) {
        // Handle invalid token or other errors during verification
        return res.status(403).json({ message: 'Invalid token' });
    }
};
