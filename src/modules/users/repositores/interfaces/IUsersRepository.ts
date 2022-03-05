interface ICreateUsersDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  avatar: string;
}

interface IUsersRepository {
  create(user: ICreateUsersDTO): Promise<void>;
}

export { IUsersRepository, ICreateUsersDTO };
