import { PrismaClient } from '@prisma/client';
import { userData } from './data/user.data';
import { Logger } from '@nestjs/common';

export const seedUsers = async (prisma: PrismaClient, logger: Logger) => {
  await prisma.$transaction(
    userData.map((user) =>
      prisma.user.upsert({
        where: { email: user.email },
        update: {},
        create: user,
      }),
    ),
  );
  logger.log('Users seeded successfully');
};
