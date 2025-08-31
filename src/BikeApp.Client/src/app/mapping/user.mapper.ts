import { User, UserRole } from '../models/user';
import { UserDto, EmergencyContactDto, UserRoleDto } from '../api/api';

export class UserMapper {
  /**
   * Maps a UserDto to a User
   */
  static fromDto(dto: UserDto): User {
    return {
      id: dto.id ?? 0,
      email: dto.email ?? '',
      firstName: dto.firstName ?? '',
      lastName: dto.lastName ?? '',
      age: dto.age ?? 0,
      address: dto.address ?? '',
      phone: dto.phone ?? '',
      emergencyContact: dto.emergencyContact ? {
        firstName: dto.emergencyContact.firstName ?? '',
        lastName: dto.emergencyContact.lastName ?? '',
        relationship: dto.emergencyContact.relationship ?? '',
        phone: dto.emergencyContact.phone ?? '',
      } : null,
      role: UserMapper.mapRoleDtoToUserRole(dto.role),
    };
  }

  /**
   * Maps a User to a UserDto
   */
  static toDto(user: User): UserDto {
    return new UserDto({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      address: user.address,
      phone: user.phone,
      emergencyContact: user.emergencyContact ? new EmergencyContactDto({
        firstName: user.emergencyContact.firstName,
        lastName: user.emergencyContact.lastName,
        relationship: user.emergencyContact.relationship,
        phone: user.emergencyContact.phone,
      }) : undefined,
      role: UserMapper.mapUserRoleToRoleDto(user.role),
    });
  }

  static mapRoleDtoToUserRole(roleDto?: UserRoleDto): UserRole {
    switch (roleDto) {
      case UserRoleDto.Admin: return UserRole.admin;
      case UserRoleDto.Organizer: return UserRole.organizer;
      case UserRoleDto.Member: return UserRole.member;
      default: return UserRole.member;
    }
  }

  static mapUserRoleToRoleDto(role: UserRole): UserRoleDto {
    switch (role) {
      case UserRole.admin: return UserRoleDto.Admin;
      case UserRole.organizer: return UserRoleDto.Organizer;
      case UserRole.member: return UserRoleDto.Member;
      default: return UserRoleDto.Member;
    }
  }
}
