export class LoginResponseDto {
  accessToken!: string;
  user!: {
    id: string;
    email: string;
    fullName: string;
    roleName: string;
  };
}
