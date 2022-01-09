import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;
    const avatar_file = null;

    const updateUserAvatarUserCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUserCase.execute({ user_id: id, avatar_file });
    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
