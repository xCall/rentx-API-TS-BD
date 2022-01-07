import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log('get: http://localhost:3333/categories');
    const listCreateCategoryUseCase = container.resolve(ListCategoriesUseCase);
    return response.json(await listCreateCategoryUseCase.execute());
  }
}

export { ListCategoriesController };
