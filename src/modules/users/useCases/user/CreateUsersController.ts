import { Request, Response } from "express";

class CreateUsersController {
  handle(request: Request, response: Response) {
    const { name, username, password, email, driver_license } = request.body;

    return response
      .status(200)
      .json({ name, username, password, email, driver_license });
  }
}

export { CreateUsersController };
