import { PrismaClient } from '@prisma/client';
import { seedRoles } from './seed/seed-role';
import { seedUsers } from './seed/seed-user';
import { Logger } from '@nestjs/common';

const prisma = new PrismaClient();
const logger = new Logger('seed');
async function main() {
  await seedRoles(prisma, logger);
  await seedUsers(prisma, logger);
  logger.log('Seeding completed successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
