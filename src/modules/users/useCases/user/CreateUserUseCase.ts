import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositores/interfaces/IUsersRepository";

interface IRequest {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  avatar: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(user: IRequest): Promise<void> {
    await this.usersRepository.create(user);
  }
}

export { CreateUserUseCase };
