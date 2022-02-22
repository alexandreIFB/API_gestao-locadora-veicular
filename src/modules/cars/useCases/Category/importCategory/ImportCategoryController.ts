import { Request, Response } from "express";

import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private importCategoryUseCase: ImportCategoryUsecase) { }

  handle(request: Request, response: Response) {
    const { file } = request;
    this.importCategoryUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
