import { authLogin } from "../controllers";
import { Router } from "express";

const app: Router = Router();

app.post("/login", authLogin);

export default app;
