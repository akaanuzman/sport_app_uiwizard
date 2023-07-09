import express from "express";

const app = express();

// Express - Body Middleware
app.use(express.json());

app.get("*", (req, res) => {
    res.status(404).json(
        {
            err: "This page doesn't exist."
        }
    )
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});