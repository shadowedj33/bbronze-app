import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const registerUser = async (req, res) => {
    try {
        let email = req.body.email;
        const savedUser = await User.findOne({ email: { $eq : email } });
        if (savedUser) {
            return res
                .status(200)
                .send({ message: "User already exists, please login", success: false })
        }
        const bcryptSalt = bcrypt.genSaltSync(10);
        const bcryptHash = bcrypt.hashSync(req.body.pasword, bcryptSalt);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: bcryptHash,
        });
        
        await newUser.save();
        
        res.status(201).send({ message: "Registration Successful", success: true});

    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Registration failed, please try again",
            success: false,
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        let email = req.body.email;
        const user = await User.findOne({ email: { $eq : email } });
        if (!user) {
            return res
                .status(200)
                .send({ message: "User not found, Register now!", success: false })
        }
        const checkPassword = await bcrypt.compare(req.body.password, user.password);
        if (!checkPassword) {
            return res
                .status(200)
                .send({ message: "Invalid email or password", success: false });
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.status(200).send({
            message: "Login Success", 
            success: true,
            token: token,   
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Login Control error ${err.message}",
            success: false,
        });
    }
};

export const getUserData = async (req, res) => {
    try {
        let id = req.body.id;
        const user = await User.findById({ _id: { $eq: id } });
        user.password = undefined;
        if (!user) {
            return res.status(200).send({
                message: "User not found",
                success: false,
            });
        } else {
            res.status(200).send({
                success: true,
                data: user,
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Error fetching user data",
            success: false,
            err,
        });
    }
};

export const logoutUser = async (req, res) => {
    try {
        res.clearCookie("accessToken");
        res.status(200).json({
            success: true,
            message: "User logged out successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to logout user. Try again.",
        });
    }
};