import asyncErrorHandler from 'express-async-handler';
import User from '../models/user.model.js';

const register = asyncErrorHandler(async (req, res, next) => {
    const user = await User.create(req.body);
    if (!user) {
        return next(new CustomError(err.message, 400));
    }
    const token = user.generateJwtFromUser();
    res.json({
        success: true,
        msg: "User registered successfully.",
        user: user,
    });
});

export {
    register,
}