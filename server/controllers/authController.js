// importing necessary modules and dependencies for the authentication 
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const { JWT_SECRET } = process.env;

const register = async (req, res, data) => {

    try {
        const { firstName, lastName, email, password } = data;
        
        if (!(firstName && lastName && email && password)) {
            res.status(400).json({ message: "All fields are mandatory!" })
            return
        }

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(400).json({ message: "This email already registered!" })
            return
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: encryptedPassword
        });

        const token = jwt.sign({ _id: user._id }, JWT_SECRET);

        user.token = token;
        user.password = undefined;

        const options = {
            // expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            httpOnly: true
        }

        res.status(201).cookie("token", token, options).json({ success: true, user });
        console.log("A new user:", user._id, "registered!");


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).json({ message: "All fields are mandatory!" });
            return
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(401).json({ message: "Incorrect email!" });
            return
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            res.status(401).json({ message: "Incorrect password!" });
            return
        }

        const token = jwt.sign({ _id: user._id }, JWT_SECRET);

        user.token = token;
        user.password = undefined;

        const options = {
            // expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
            // expires: new Date(Date.now() + 1 * 60 * 1000), // 1 min
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            httpOnly: true
        }

        res.status(201).cookie("token", token, options).json({ success: true, user });
        console.log("user:", user._id, "logged in!");


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
}

const isLoggedIn = (req, res) => {
    res.status(201).json({ success: true, message: "User is Logged in" });
}

const logout = async (req, res) => {
    await res.clearCookie('token', { httpOnly: true });
    res.status(201).json({ success: true, message: "Logged out succesfully!" });

    // res.redirect('/');
}


export { register, login, logout, isLoggedIn };