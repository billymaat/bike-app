import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../models/user';

@Component({
  selector: 'app-view-user-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatDividerModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>User Details</h2>
    <mat-dialog-content>
      <div class="user-details">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {{data.firstName}} {{data.lastName}}</p>
        <p><strong>Email:</strong> {{data.email}}</p>
        <p><strong>Age:</strong> {{data.age}}</p>
        <p><strong>Phone:</strong> {{data.phone}}</p>
        <p><strong>Address:</strong> {{data.address}}</p>
        <p><strong>Role:</strong> {{data.role}}</p>

        <mat-divider class="my-4"></mat-divider>

        <h3>Emergency Contact</h3>
        <div *ngIf="data.emergencyContact">
          <p><strong>Name:</strong> {{data.emergencyContact.firstName}} {{data.emergencyContact.lastName}}</p>
          <p><strong>Relationship:</strong> {{data.emergencyContact.relationship}}</p>
          <p><strong>Phone:</strong> {{data.emergencyContact.phone}}</p>
        </div>
        <p *ngIf="!data.emergencyContact">No emergency contact provided</p>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Close</button>
    </mat-dialog-actions>
  `,
  styles: [`
    .user-details {
      padding: 16px;
    }
    .my-4 {
      margin: 24px 0;
    }
    h3 {
      color: #1976d2;
      margin-bottom: 16px;
    }
    p {
      margin: 8px 0;
    }
  `]
})
export class ViewUserDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {}
}
