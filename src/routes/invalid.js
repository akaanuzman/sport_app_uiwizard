import express from 'express';

const router = express.Router();

router.use("*", (req, res) => {
    res.status(404).json(
        {
            err: "This page doesn't exist."
        }
    )
});

export default router;