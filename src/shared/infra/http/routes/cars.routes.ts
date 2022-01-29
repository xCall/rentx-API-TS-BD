import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();
const createCarConntroller = new CreateCarController();

carsRoutes.post('/', ensureAuthenticated, createCarConntroller.handle);

export { carsRoutes };
