import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepositorys';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string,
    email: string,
  },
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,
  ) { }
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Email our password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email our password incorrect');
    }

    const token = sign(
      {},
      'b56db73d20d2d4b374aae5e5c86b58f6',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return {
      user,
      token,
    };
  }
}
export { AuthenticateUserUseCase };
