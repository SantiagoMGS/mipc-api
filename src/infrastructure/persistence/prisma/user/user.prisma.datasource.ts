import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { UserGetPayload } from '../types/user.types';

@Injectable()
export class UserDatasource {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<UserGetPayload[]> {
    const users: UserGetPayload[] = await this.prisma.user.findMany({
      include: {
        role: true,
      },
    });
    return users;
  }
}
