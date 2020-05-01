import { Request, Response, NextFunction } from "express";
import HttpException from "../utils/exceptions";

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500;
  const message = error.message || "We are having some troubles, sorry!";

  response.status(status).send(message);
};
