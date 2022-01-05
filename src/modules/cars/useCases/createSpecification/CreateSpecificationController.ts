import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
    createSpecificationUseCase.execute({ name, description });

    console.log('post: http://localhost:3333/specifications');

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
