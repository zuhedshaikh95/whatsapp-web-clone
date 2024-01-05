import { CustomException, getPrismaClient } from "../utils";
import { Request, Response } from "express";

interface RequestBodyT {
  email?: string;
  password?: string;
}

export const authLogin = async (
  request: Request<{}, {}, RequestBodyT, {}>,
  response: Response
): Promise<Response | void> => {
  const { email, password } = request.body;

  try {
    if (!email || !password) {
      throw new CustomException(400, "BAD REQUEST!");
    }

    const prisma = getPrismaClient();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new CustomException(401, "Either email or password is incorrect!");
    }

    return response.json({
      message: "User Found!",
      data: user,
      success: true,
    });
  } catch (error) {
    response.status(error instanceof CustomException ? error.status : 500).json({
      message: error.message,
      success: false,
    });
  }
};
