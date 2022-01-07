import { Router } from 'express';

import { AuthenticateUserControler } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authenticateUseController = new AuthenticateUserControler();
const authenticateRoutes = Router();

authenticateRoutes.post('/sessions', authenticateUseController.handle);

export { authenticateRoutes };
