import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', function (req: Request, res: Response) {
  res.send('hello world');
});

export default app;