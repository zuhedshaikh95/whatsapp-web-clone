import { Request, Response } from "express";

interface RequestBodyT {
  email?: string;
  password?: string;
}

export const userController = (request: Request<{}, {}, RequestBodyT, {}>, response: Response) => {
  const { email, password } = request.body;
  try {
  } catch (error) {
    response.json({
      message: error.message,
    });
  }
};
