import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { UserGetPayload } from '../types/user.types';
import { Prisma } from '@prisma/client';
import { EmailAlreadyExistsError } from '@domain/exceptions/email-already-exists.error';
import { UserEntity } from '@domain/user/user.entity';

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

  async create(userEntity: UserEntity): Promise<UserGetPayload> {
    try {
      const newUser = await this.prisma.user.create({
        data: {
          id: userEntity.id,
          email: userEntity.email,
          fullName: userEntity.fullName,
          password: userEntity.passwordHash,
          roleId: userEntity.roleId,
        },
        include: {
          role: true,
        },
      });
      return newUser;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          const target = error.meta?.target as string[];
          if (target && target.includes('email')) {
            throw new EmailAlreadyExistsError(userEntity.email);
          }
        }
      }
      throw error;
    }
  }
}
