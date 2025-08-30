import { Component, inject, ViewChild, AfterViewInit, effect } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { UserStore } from './users.store';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ViewUserDialog } from './view-user-dialog.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './users.page.html',
  styleUrl: './users.page.scss'
})
export class UsersPage implements AfterViewInit {

  store = inject(UserStore);
  dialog = inject(MatDialog);

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.store.loadAllUsers();
    effect(() => {
      this.dataSource.data = this.store.users();
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortData(sort: Sort) {
    const data = this.store.users().slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'firstName':
          return compare(a.firstName, b.firstName, isAsc);
        case 'lastName':
          return compare(a.lastName, b.lastName, isAsc);
        default:
          return 0;
      }
    });
  }

  viewUser(user: User) {
    this.dialog.open(ViewUserDialog, {
      width: '500px',
      data: user
    });
  }
}

function compare(a: string, b: string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
