import { Router } from 'express';

import { ensureAuthenticated } from '@middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';

const createSpecificationController = new CreateSpecificationController();

const specificationRoutes = Router();

specificationRoutes.post(
  '/',
  ensureAuthenticated,
  createSpecificationController.handle,
);

export { specificationRoutes };
