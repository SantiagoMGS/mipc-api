import 'dotenv/config';
import path from 'node:path';
import { PrismaConfig } from 'prisma';

export default {
  earlyAccess: true,
  schema: path.join('prisma'),
} satisfies PrismaConfig;
