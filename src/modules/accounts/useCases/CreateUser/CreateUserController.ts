import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      password,
      email,
      driver_license,
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({
      name,
      password,
      email,
      driver_license,
    });

    console.log('post: http://localhost:3333/user');

    return response.status(201).send();
  }
}
export { CreateUserController };
