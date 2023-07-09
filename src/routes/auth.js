import express from 'express';

const router = express.Router();

router.post('/login', (req, res, next) => {
    res.json({
        "msg": "Login route works.",
    });
});
router.post('/register', (req, res, next) => {
    res.json({
        "msg": "Register route works.",
    });
});
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