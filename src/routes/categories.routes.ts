import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
 return CreateCategoryController
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();
  return response.json(allCategories);
});

export { categoriesRoutes };
