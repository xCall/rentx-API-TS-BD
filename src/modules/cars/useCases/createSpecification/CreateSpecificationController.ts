import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    console.log('post: http://localhost:3333/specifications');

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
