import { UserEntity } from './user.entity';

export abstract class UserRepository {
  abstract findAll(): Promise<UserEntity[]>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
  abstract create(user: UserEntity): Promise<UserEntity>;
}
