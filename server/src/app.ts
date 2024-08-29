import express, { Request, Response } from 'express';
import bodyParser from "body-parser"; 
import cors from "cors"

import reviewsRouter from './routes/reviewsRoutes';

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Set-Cookie'],
    origin: ['http://localhost:3000'],
  })
);

const port = process.env.PORT || 3001;

app.use('/reviews', reviewsRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});