import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'

import reviewsRouter from "./routes/reviewsRoutes";

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

dotenv.config({path: './.env'})

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Set-Cookie"],
    origin: [`http://localhost:${process.env.CLIENT_PORT}`],
  })
);

const port = process.env.PORT || 3001;

app.use("/reviews", reviewsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
