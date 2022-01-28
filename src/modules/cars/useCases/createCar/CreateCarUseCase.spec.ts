import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });
  it('should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 12345,
      license_plate: 'License Car',
      fine_amount: 50,
      brand: 'Brand Car',
      category_id: 'be283007-0850-404f-b2df-e586394d040a',
    });
  });
  it('should not be able to create a car with exists licenses plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Name Car1',
        description: 'Description Car',
        daily_rate: 12345,
        license_plate: 'ABC-0123',
        fine_amount: 50,
        brand: 'Brand Car',
        category_id: 'be283007-0850-404f-b2df-e586394d040a',
      });

      await createCarUseCase.execute({
        name: 'Name Car1',
        description: 'Description Car',
        daily_rate: 12345,
        license_plate: 'ABC-0123',
        fine_amount: 50,
        brand: 'Brand Car',
        category_id: 'be283007-0850-404f-b2df-e586394d040a',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name Available',
      description: 'Description Car',
      daily_rate: 12345,
      license_plate: 'ABC-0321',
      fine_amount: 50,
      brand: 'Brand Car',
      category_id: 'be283007-0850-404f-b2df-e586394d040a',
    });

    expect(car.available).toBe(true);
  });
});
