import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";
import router from "./src/routes/index.js";
import invalid from "./src/routes/invalid.js";


dotenv.config({ path: './src/config/.env' });

const port = process.env.PORT || 3001;
const app = express();

// Express - Body Middleware
app.use(express.json());

// Router Middlewares
app.use('/api', router);

app.use(invalid);

app.listen(port, () => {
    console.log(`The server was started on ${port} port.`)
});