import { PrismaClient } from '@prisma/client';
import { roleData } from './data/role.data';
import { Logger } from '@nestjs/common';

export const seedRoles = async (prisma: PrismaClient, logger: Logger) => {
  await prisma.role.createMany({
    data: roleData,
    skipDuplicates: true,
  });
  logger.log('Roles seeded successfully');
};
