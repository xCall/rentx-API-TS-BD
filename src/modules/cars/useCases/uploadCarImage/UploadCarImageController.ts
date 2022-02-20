import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { UploadCarImageUseCase } from './UploadCarImageUseCase';

class UploadCarImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files;
    const uploadCarImageUseCase = container.resolve(UploadCarImageUseCase);

    await uploadCarImageUseCase.execute()
  }
}
export { UploadCarImageController };
