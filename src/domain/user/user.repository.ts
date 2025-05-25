import { UserEntity } from './user.entity';

export abstract class UserRepository {
  abstract findAll(): Promise<UserEntity[]>;
  abstract create(user: UserEntity): Promise<UserEntity>;
}
