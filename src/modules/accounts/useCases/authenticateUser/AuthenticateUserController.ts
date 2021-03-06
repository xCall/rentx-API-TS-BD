import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({ email, password });

    console.log('post: http://localhost:3333/sessions');

    return response.json(token);
  }
}
export { AuthenticateUserController };
