import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  '/',
  ensureAuthenticated,
  createCategoryController.handle,
);

categoriesRoutes.get('/', ensureAuthenticated, (request, response) =>
  listCategoriesController.handle(request, response),
);

categoriesRoutes.post(
  '/import',
  ensureAuthenticated,
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };
