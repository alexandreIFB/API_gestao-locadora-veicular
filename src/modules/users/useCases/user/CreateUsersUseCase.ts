interface IRequest {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
}

class CreateUsersUseCase {
  execute({ name, username, password, email, driver_license }: IRequest) {
    return 1;
  }
}
