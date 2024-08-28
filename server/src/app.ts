import express, { Request, Response } from 'express';
import bodyParser from "body-parser"; 
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors)

const port = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
  console.log('hello')
  return res.send('Hello, TypeScript + Node.js + Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});