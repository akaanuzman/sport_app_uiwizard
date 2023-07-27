import asyncErrorHandler from 'express-async-handler';
import User from '../models/user.model.js';
import { validateUserInput, comparePassword } from "../helpers/input/input.helper.js";


const login = asyncErrorHandler(async (req, res, next) => {
    const { email, password } = req.body;
    validateUserInput(email, password, next);
    const user = await User
        .findOneAndUpdate({ email }, { signedIn: Date.now() })
        .select("+password");
    if (!user) {
        return next(new CustomError("Please check your email.", 400));
    }
    if (!comparePassword(password, user.password)) {
        return next(new CustomError("Please check your password and try again.", 400));
    }
    const token = user.generateJwtFromUser();
    user.token = token;
    await user.save();
    res.json({
        success: true,
        msg: "User logged in successfully.",
        user: user,
    });
});

const register = asyncErrorHandler(async (req, res, next) => {
    const user = await User.create(req.body);
    if (!user) {
        return next(new CustomError(err.message, 400));
    }
    const token = user.generateJwtFromUser();
    user.token = token;
    res.json({
        success: true,
        msg: "User registered successfully.",
        token: token,
        user: user,
    });
});


export {
    login,
    register,
}