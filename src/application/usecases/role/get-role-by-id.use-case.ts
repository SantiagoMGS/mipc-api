import { RoleRepository } from '@domain/role/role.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { RoleResponseDto } from './dto/role-response.dto';

export interface GetRoleByIdCommand {
  id: string;
}

@Injectable()
export class GetRoleByIdUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(command: GetRoleByIdCommand): Promise<RoleResponseDto> {
    const role = await this.roleRepository.findById(command.id);
    if (!role) {
      throw new NotFoundException(`El rol con ID '${command.id}' no existe.`);
    }
    return role;
  }
}
