import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { SpecificationRepositoryInMemory } from '@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;

describe('Create Car Specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationsRepositoryInMemory,
    );
  });
  // Implementação do forum
  // it('Should not be able to add a new specification to a non-existent car', async () => {
  //   const car_id = '1234';
  //   const specification_id = ['54321'];

  //   await expect(
  //     createCarSpecificationUseCase.execute({
  //       car_id,
  //       specification_id,
  //     }),
  //   ).rejects.toEqual(new AppError('Car does not exists!'));
  // });

  // it('Should be able to add a new specification to the car', async () => {
  //   const car = await carsRepositoryInMemory.create({
  //     name: 'Name Car',
  //     description: 'Description Car',
  //     daily_rate: 100,
  //     license_plate: 'ABC-1234',
  //     fine_amount: 60,
  //     brand: 'Brand',
  //     category_id: 'category',
  //   });

  //   const specifications = await specificationsRepositoryInMemory.create({
  //     description: 'test',
  //     name: 'test',
  //   });

  //   const specification_id = [specifications.id];

  //   const specificationsCars = await createCarSpecificationUseCase.execute({
  //     car_id: car.id,
  //     specification_id,
  //   });

  //   expect(specificationsCars).toHaveProperty('specifications');
  //   expect(specificationsCars.specifications.length).toBe(1);
  // });

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
    const specification = await specificationsRepositoryInMemory.create({
      description: 'teste',
      name: 'teste',
    });
    const specification_id = [specification.id];

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specification_id,
    });

    expect(specificationsCars).toHaveProperty('specifications');
    expect(specificationsCars.specifications.length).toBe(1);

    console.log(specificationsCars);
  });
});
