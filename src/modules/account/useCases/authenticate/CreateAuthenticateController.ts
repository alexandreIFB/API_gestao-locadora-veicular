import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAuthenticateUseCase } from "./CreateAuthenticateUseCase";

class CreateAuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createAuthenticateUseCase = container.resolve(
      CreateAuthenticateUseCase
    );

    const tokenReturn = await createAuthenticateUseCase.execute({
      email,
      password,
    });

    return response.status(200).json(tokenReturn);
  }
}

export { CreateAuthenticateController };
