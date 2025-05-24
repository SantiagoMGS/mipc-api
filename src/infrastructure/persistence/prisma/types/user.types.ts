import { Prisma } from '@prisma/client';

export type UserGetPayload = Prisma.UserGetPayload<{
  select: {
    id: true;
    email: true;
    fullName: true;
    role: {
      select: {
        id: true;
        name: true;
      };
    };
  };
}>;

export type UserCreateInput = Prisma.UserCreateInput;
export type UserUpdateInput = Prisma.UserUpdateInput;
