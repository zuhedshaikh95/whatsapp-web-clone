import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { authRoute } from "./routes";

// For .env file
dotenv.config();

const app: Express = express();
const PORT = 8080;

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Other Routes
app.use("/api/v1/auth", authRoute);

app.get("/", (request: Request, response: Response) => {
  response.send("Hello, Topper!");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
