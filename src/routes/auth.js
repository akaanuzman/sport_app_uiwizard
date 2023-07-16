import express from 'express';
import { login, register } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/forgotPassword', (req, res, next) => {
    res.json({
        "msg": "Forgot Password route works.",
    });
});
router.put('/resetPassword', (req, res, next) => {
    res.json({
        "msg": "Reset Password route works.",
    });
});

export default router;