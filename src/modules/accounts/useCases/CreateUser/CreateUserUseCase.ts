import { hash } from 'bcrypt';
import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepositorys';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAleadyExists = await this.usersRepository.findByEmail(email);

    if (userAleadyExists) {
      throw new AppError('User already exists!');
    }

    const passwordHash = await hash(password, 8);
    await this.usersRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}
export { CreateUserUseCase };
