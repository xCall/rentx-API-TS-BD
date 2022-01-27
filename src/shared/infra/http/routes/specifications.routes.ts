import { Router } from 'express';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const createSpecificationController = new CreateSpecificationController();

const specificationRoutes = Router();

specificationRoutes.post(
  '/',
  ensureAuthenticated,
  createSpecificationController.handle,
);

export { specificationRoutes };
