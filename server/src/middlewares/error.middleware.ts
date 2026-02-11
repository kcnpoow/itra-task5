import type { Request, Response, NextFunction } from "express";

import { ApiError } from "../errors/api.error";

export const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(error);

  if (error instanceof ApiError) {
    return res.status(error.status).json({
      message: error.message,
      status: error.status,
    });
  }

  res.status(500).json({
    message: "Internal server error",
    status: 500,
  });
};
