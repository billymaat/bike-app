import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { UserStore } from './users.store';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users',
  imports: [MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [UserStore],
  templateUrl: './users.page.html',
  styleUrl: './users.page.scss'
})
export class UsersPage {

  store = inject(UserStore);
  viewUser(userId: number) {
    // Logic to view user details
  }
}
