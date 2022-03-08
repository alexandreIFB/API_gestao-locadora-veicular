import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositores/interfaces/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IReponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

@injectable()
class CreateAuthenticateUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IReponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect");
    }

    const token = sign({}, "bb0c9efdb51213f94aa2b6a49034b73c", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IReponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { CreateAuthenticateUseCase };
