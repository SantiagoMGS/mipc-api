export class RoleEntity {
  readonly id!: string;
  readonly name!: string;

  constructor(params: RoleEntity) {
    Object.assign(this, params);
  }
}
