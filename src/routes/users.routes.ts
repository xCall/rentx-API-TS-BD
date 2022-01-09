import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const usersRoute = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoute.post('/', createUserController.handle);

usersRoute.patch('/avatar', ensureAuthenticated, updateUserAvatarController.handle);

export { usersRoute };
