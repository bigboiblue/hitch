import express from "express";
import routesRouter from "./routes";
const app = express();

app.use(routesRouter);

export default app;
