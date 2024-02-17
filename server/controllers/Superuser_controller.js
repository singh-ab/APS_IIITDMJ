const User = require("../models/User");
const User = require("../models/User");
require("dotenv").config({path:"../config/.env"})


exports.signup = async (req, res) => {
    try {
        const existingSuperuser = await User.findOne({ status: "superuser" });
        if (existingSuperuser) {
            return res.status(400).json({
                success: false,
                message: "Superuser already created!"
            });
        }

        const username = process.env.SUPERUSER_USERNAME;
        const password = process.env.SUPERUSER_PASSWORD;
        const name = 'superuser';
        const status = 'superuser';

        const identity = await User.create({ username, password, name, status });

        res.status(201).json({
            success: true,
            message: "Superuser created successfully",
            identity
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};



exports.createUser = async (req, res) => {
    try {
        const { name, username, password, status } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists!"
            });
        }
        const identity = await User.create({ name, username, password, status });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            identity
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.viewUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const username = req.params.username;
        const deletedUser = await User.findOneAndDelete({ username });
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        res.status(202).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
