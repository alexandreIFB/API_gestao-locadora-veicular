import { Router } from "express";

import { CategoriesRepository } from "../repostitories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.sendStatus(201);
});

categoriesRoutes.get("", (request, response) => {
  const categories = categoriesRepository.find();
  return response.json(categories);
});

export { categoriesRoutes };
