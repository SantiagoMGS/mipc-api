import { RoleEntity } from './role.entity';

export abstract class RoleRepository {
  abstract findById(id: string): Promise<RoleEntity | null>;
}
