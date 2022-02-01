import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListCarsUseCase } from './ListCarsUseCase';

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });
  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Audi A5',
      description: 'Description Car',
      daily_rate: 12345,
      license_plate: 'ABC-5478',
      fine_amount: 50,
      brand: 'Brand Car',
      category_id: '3ed022a4-ff6a-4ec4-9492-257b58b44feb',
    });
    const cars = await listCarsUseCase.execute();

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', () => {
    
  });
});
