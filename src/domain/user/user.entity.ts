export class UserEntity {
  readonly id: string;
  email: string;
  fullName: string;
  passwordHash: string;
  roleId: string;
  roleName: string;

  constructor(params: {
    id: string;
    email: string;
    fullName: string;
    passwordHash: string;
    roleId: string;
    roleName: string;
  }) {
    if (
      !params.id ||
      !params.email ||
      !params.fullName ||
      !params.passwordHash ||
      !params.roleId ||
      !params.roleName
    ) {
      throw new Error(
        'ID, email, fullName, passwordHash, roleId y roleName son requeridos para UserEntity',
      );
    }

    this.id = params.id;
    this.email = params.email;
    this.fullName = params.fullName;
    this.passwordHash = params.passwordHash;
    this.roleId = params.roleId;
    this.roleName = params.roleName;
  }
}
