import { inject, Injectable } from '@angular/core';
import { UsersClient } from '../api/api';
import { UserMapper } from '../mapping/user.mapper';
import { map } from 'rxjs';

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
}
