import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

// For .env file
dotenv.config();

const app: Express = express();
const PORT = 8080;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (request: Request, response: Response) => {
  response.send("Hello, Topper!");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
