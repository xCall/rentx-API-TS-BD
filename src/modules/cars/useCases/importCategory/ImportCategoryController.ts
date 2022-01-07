import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    await importCategoryUseCase.execute(file);

    console.log('post: http://localhost:3333/categories/import');

    return response.status(201).send();
  }
}

export { ImportCategoryController };
