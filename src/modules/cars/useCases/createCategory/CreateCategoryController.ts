import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {

  }
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ name, description });

    console.log('post: http://localhost:3333/categories');

    return response.status(201).send();
  }
}

export { CreateCategoryController };
