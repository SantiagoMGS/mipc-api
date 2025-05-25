import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { UserGetPayload } from '../types/user.types';
import { Prisma } from '@prisma/client';
import { EmailAlreadyExistsError } from '@domain/exceptions/email-already-exists.error';

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

  async create(user: any) {
    try {
      const newUser = await this.prisma.user.create({
        data: user,
      });
      return newUser;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          const target = error.meta?.target as string[];
          if (target && target.includes('email')) {
            throw new EmailAlreadyExistsError(user.email);
          }
        }
      }
      throw error;
    }
  }
}
