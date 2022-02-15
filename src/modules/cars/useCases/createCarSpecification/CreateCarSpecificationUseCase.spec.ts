import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should not be able to add a new specification to a mow-existent car', async () => {
    expect(async () => {
      const car_id = '15465486asdg';
      const specification_id = ['45adag687461'];

      await createCarSpecificationUseCase.execute({
        car_id,
        specification_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to add a new specification to the car', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 12345,
      license_plate: 'License Car',
      fine_amount: 50,
      brand: 'Brand Car',
      category_id: 'be283007-0850-404f-b2df-e586394d040a',
    });
    const car_id = '15465486asdg';
    const specification_id = ['45adag687461'];

    await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specification_id,
    });
  });
});
