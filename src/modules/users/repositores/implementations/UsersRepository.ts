import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import {
  ICreateUsersDTO,
  IUsersRepository,
} from "../interfaces/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(userParams: ICreateUsersDTO): Promise<void> {
    const user = this.repository.create(userParams);

    await this.repository.save(user);
  }
}

export { UsersRepository };
