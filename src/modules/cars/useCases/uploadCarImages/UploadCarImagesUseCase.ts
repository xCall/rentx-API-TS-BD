import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject('CarsImagesRepository')
    private carsImageRepository: ICarsImagesRepository,
  ) {}
  async execute({ car_id, images_name }: IRequest): Promise<void> {
    images_name.map(async image => {
      await this.carsImageRepository.create(car_id, image);
    });
  }
}
export { UploadCarImagesUseCase };
