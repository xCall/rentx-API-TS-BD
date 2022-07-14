// import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
// import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
// import { UsersTokensRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersTokensRepositoryImMemory';
// import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
// import { AppError } from '@shared/errors/AppError';

// import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
// import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

// let authenticateUserUseCase: AuthenticateUserUseCase;
// let usersRepositoryInMemory: UsersRepositoryInMemory;
// let createUserUseCase: CreateUserUseCase;
// let dateProvider: DayjsDateProvider;

// let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;

// describe('Authenticate User', () => {
//   beforeEach(() => {
//     usersRepositoryInMemory = new UsersRepositoryInMemory();
//     usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
//     dateProvider = new DayjsDateProvider();

//     authenticateUserUseCase = new AuthenticateUserUseCase(
//       usersRepositoryInMemory,
//       usersTokensRepositoryInMemory,
//       dateProvider,
//     );
//     createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
//   });
//   it('should be able to authenticate an user', async () => {
//     const user: ICreateUserDTO = {
//       driver_license: '00123',
//       email: 'user@teste.com',
//       password: '123456',
//       name: 'User test',
//     };
//     await createUserUseCase.execute(user);

//     const result = await authenticateUserUseCase.execute({
//       email: user.email,
//       password: user.password,
//     });

//     expect(result).toHaveProperty('token');
//   });
//   it('should not be able to authenticate an nonexistent user', async () => {
//     await expect(
//       authenticateUserUseCase.execute({
//         email: 'false@teste.com',
//         password: '123456',
//       }),
//     ).rejects.toEqual(new AppError('Email our password incorrect!'));
//   });
//   it('should not be able to authenticate with incorrect password', async () => {
//     const user: ICreateUserDTO = {
//       driver_license: '9999',
//       email: 'teste@teste.com',
//       password: '123456',
//       name: 'User test Error',
//     };
//     await createUserUseCase.execute(user);
//     await expect(
//       authenticateUserUseCase.execute({
//         email: user.email,
//         password: 'incorrect password',
//       }),
//     ).rejects.toEqual(new AppError('Email our password incorrect!'));
//   });
// });

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { UsersTokensRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersTokensRepositoryImMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { CreateUserUseCase } from '../CreateUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let userTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;

let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    userTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    dateProvider = new DayjsDateProvider();

    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
      userTokensRepositoryInMemory,
      dateProvider,
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000123',
      email: 'user@test.com',
      password: '1234',
      name: 'User Test',
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'false@email.com',
        password: '1234',
      }),
    ).rejects.toEqual(new AppError('Email or password incorrect!'));
  });

  it('should not be able to authenticate with incorrect password', async () => {
    const user: ICreateUserDTO = {
      driver_license: '9999',
      email: 'user@user.com',
      password: '1234',
      name: 'User Test Error',
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrectPassword',
      }),
    ).rejects.toEqual(new AppError('Email or password incorrect!'));
  });
});
