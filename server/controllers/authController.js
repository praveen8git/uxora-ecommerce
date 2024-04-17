// importing necessary modules and dependencies for the authentication 
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Customer from "../models/Customer.js";

const { JWT_SECRET } = process.env;


/**
 * The function `login` handles user authentication by checking email and password, generating a JWT
 * token, setting a cookie, and returning a success response with the customer details.
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).json({ message: "All fields are mandatory!" });
            return
        }

        const customer = await Customer.findOne({ email: email });
        if (!customer) {
            res.status(401).json({ message: "Incorrect email!" });
            return
        }

        const matchPassword = await bcrypt.compare(password, customer.password);
        if (!matchPassword) {
            res.status(401).json({ message: "Incorrect password!" });
            return
        }

        const token = jwt.sign({ _id: customer._id, role: customer.role }, JWT_SECRET);

        customer.token = token;
        customer.password = undefined;

        const cookieOptions = {
            // expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
            // expires: new Date(Date.now() + 1 * 60 * 1000), // 1 min
            maxAge: 24 * 60 * 60 * 1000, // 1 day
            httpOnly: true,
            secure: true, // Set to true if your site is served over HTTPS
            sameSite: 'none' // Consider setting this if your frontend and backend are on different domains
        }

        res.status(201).cookie("token", token, cookieOptions).json({ success: true, customer });
        console.log("customer:", customer._id, "logged in!");


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
}

const isLoggedIn = (req, res) => {
    const { user } = req
    // console.log(user);
    res.status(201).json({ success: true, user });
}

const logout = async (req, res) => {
    await res.clearCookie('token', { 
        httpOnly: true,
        secure: true, // Set to true if your site is served over HTTPS
        sameSite: 'none' // Consider setting this if your frontend and backend are on different domains
    });
    res.status(201).json({ success: true, message: "Logged out succesfully!" });

    // res.redirect('/');
}


export { login, logout, isLoggedIn };