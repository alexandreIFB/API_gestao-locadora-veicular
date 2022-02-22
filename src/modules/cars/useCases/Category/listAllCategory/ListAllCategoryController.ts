import { Request, Response } from "express";

import { ListAllCaregoryUseCase } from "./ListAllCategoryUseCase";

class ListAllCaregoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllCategoryUseCase: ListAllCaregoryUseCase) { }

  hanlde(request: Request, response: Response): Response {
    return response.json(this.listAllCategoryUseCase.execute());
  }
}

export { ListAllCaregoryController };
