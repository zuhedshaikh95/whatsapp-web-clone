import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import crypto from "crypto";

// For .env file
dotenv.config();

const app: Express = express();
const PORT = 8080;

app.get("/", (request: Request, response: Response) => {
  response.send("Hello, Topper!");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
