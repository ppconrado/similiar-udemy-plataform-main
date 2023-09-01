import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";
import { routes } from "./routes";
import MongoDBService from "./services/MongoDBService";
import { errorMiddleware } from "./middleware/error";
import { notFoundMiddleware } from "./middleware/not-found";

const app = express();

app.use(express.json());

app.use(routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export { app };
