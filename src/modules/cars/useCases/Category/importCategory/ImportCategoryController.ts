import { Request, Response } from "express";

import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private importCategoryUseCase: ImportCategoryUsecase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    try {
      await this.importCategoryUseCase.execute(file);
      return response.send();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ImportCategoryController };
