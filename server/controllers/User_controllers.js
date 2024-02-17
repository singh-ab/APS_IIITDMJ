const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config({path:"../config/.env"})



exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username :username});

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });


        return res.status(200).json({ message: "Login successful", token:token, user });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};
