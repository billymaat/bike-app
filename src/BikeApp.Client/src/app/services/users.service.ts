import { inject, Injectable } from '@angular/core';
import { UsersClient } from '../api/api';
import { UserMapper } from '../mapping/user.mapper';
import { map, Observable, of } from 'rxjs';
import { UserRole } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersClient = inject(UsersClient);
  constructor() { }

  getUsers() {
    return this.usersClient.getAll().pipe(
      map(users => users.map(user => UserMapper.fromDto(user)))
    );
  }

  getUserById(userId: number) {
    return this.usersClient.get(userId).pipe(
      map(user => UserMapper.fromDto(user))
    );
  }

  updateUserRole(userId: number, role: UserRole) : Observable<void> {
    // Implementation will be added later
    const dto = UserMapper.mapUserRoleToRoleDto(role);
    return this.usersClient.updateUserRole(userId, dto);
  }
}
