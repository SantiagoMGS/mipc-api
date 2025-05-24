import { Prisma } from '@prisma/client';

export const userData: Prisma.UserCreateInput[] = [
  {
    fullName: 'Admin',
    email: 'admin@admin.com',
    password: 'password',
    role: {
      connect: {
        name: 'ADMIN',
      },
    },
  },
];
