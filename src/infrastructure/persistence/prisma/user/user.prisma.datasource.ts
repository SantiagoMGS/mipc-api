import { User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

export class UserDatasource {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<User[]> {
    const users: User[] = await this.prisma.user.findMany({
      include: {
        role: true,
      },
    });
    return users;
  }
}
