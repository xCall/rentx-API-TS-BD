import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCreateCategoryUseCase: ListCategoriesUseCase) { }
  handle(request: Request, response: Response): Response {
    console.log('get: http://localhost:3333/categories');

    return response.json(this.listCreateCategoryUseCase.execute());
  }
}

export { ListCategoriesController };
