import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("", (request, response) => {
  const { name, description } = request.body;

  const categoryExist = categoriesRepository.findByName(name);

  if (categoryExist) {
    return response.status(400).json({ error: "Category already exist" });
  }

  categoriesRepository.create({ name, description });

  return response.sendStatus(201);
});

categoriesRoutes.get("", (request, response) => {
  const categories = categoriesRepository.find();
  return response.json(categories);
});

export { categoriesRoutes };
