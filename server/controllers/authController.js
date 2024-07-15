import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {
    try {
        const bcryptSalt = bcrypt.genSaltSync(10);
        const bcryptHash = bcrypt.hashSync(req.body.password, bcryptSalt);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: bcryptHash,
        });

        await newUser.save();

        res.status(200).json({
            success: true,
            message: "User registered successfully",
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to register user. Try again.",
        });
    };
}

export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "No user found. Please create an account!",
            });
        }

        const checkPassword = await bcrypt.compare(
            password,
            user.password
        )

        if(!checkPassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const {password: hashedPassword, role, ...rest} = user._doc;
        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: "15d"}
        );

        res
        .cookie("accessToken", token, {
            httpOnly: true,
            expires: token.expiresIn,
        })
        .status(200)
        .json({
            token,
            data:{...rest},
            role,
        });
    } catch (err) {
        console.error(err);
        res
        .status(500)
        .json({
            success: false,
            message: "Failed to login. Try again.",
        });
    };
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("accessToken");
        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to logout. Try again.",
        });
    };
};