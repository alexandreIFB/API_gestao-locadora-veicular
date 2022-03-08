import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAuthenticateUseCase } from "./CreateAuthenticateUseCase";

class CreateAuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const createAuthenticateUseCase = container.resolve(
        CreateAuthenticateUseCase
      );

      const tokenReturn = await createAuthenticateUseCase.execute({
        email,
        password,
      });

      return response.status(200).json(tokenReturn);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateAuthenticateController };
