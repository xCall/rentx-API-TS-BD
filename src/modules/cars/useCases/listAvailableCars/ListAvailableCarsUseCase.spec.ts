import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });
  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 12345,
      license_plate: 'ABC-4321',
      fine_amount: 50,
      brand: 'Brand_Car1',
      category_id: '3ed022a4-ff6a-4ec4-9492-257b58b44feb',
    });
    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car2',
      description: 'Description Car',
      daily_rate: 12345,
      license_plate: 'ABC-5478',
      fine_amount: 50,
      brand: 'Brand_Car2',
      category_id: '3ed022a4-ff6a-4ec4-9492-257b58b44feb',
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car2',
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car3',
      description: 'Description Car',
      daily_rate: 12345,
      license_plate: 'ABC-1234',
      fine_amount: 50,
      brand: 'Brand_Car3',
      category_id: '3ed022a4-ff6a-4ec4-9492-257b58b44feb',
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Brand_Car3',
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car4',
      description: 'Description Car',
      daily_rate: 12345,
      license_plate: 'ABC-4321',
      fine_amount: 50,
      brand: 'Brand_Car4',
      category_id: '12345',
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: '12345',
    });

    console.log(cars);

    expect(cars).toEqual([car]);
  });
});
