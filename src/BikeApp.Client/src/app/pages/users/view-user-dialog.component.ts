import { Component, computed, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { User, UserRole } from '../../models/user';
import { CurrentUserStore } from '../../store/current-user-store';
import { UserStore } from './users.store';

@Component({
  selector: 'app-view-user-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatDividerModule, MatButtonModule, MatSelectModule, FormsModule],
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
        <div class="role-section">
          <strong>Role: </strong>
          <ng-container *ngIf="isAdmin(); else displayRole">
            <mat-form-field>
              <mat-select [(ngModel)]="selectedRole" (selectionChange)="onRoleChange()">
                <mat-option *ngFor="let role of roles" [value]="role">
                  {{role}}
                </mat-option>
              </mat-select>
            </mat-form-field>
          </ng-container>
          <ng-template #displayRole>
            {{data.role}}
          </ng-template>
        </div>

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
    .role-section {
      margin: 8px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    mat-form-field {
      width: 120px;
      margin-top: -16px;
    }
  `]
})
export class ViewUserDialog {
  private currentUserStore = inject(CurrentUserStore);
  private userStore = inject(UserStore);
  
  roles = Object.values(UserRole);
  selectedRole: UserRole;
  isAdmin = computed(() => {
    const user = this.currentUserStore.user();
    return user?.role === UserRole.admin;
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private dialogRef: MatDialogRef<ViewUserDialog>
  ) {
    this.selectedRole = data.role as UserRole;
  }

  onRoleChange() {
    if (this.selectedRole !== this.data.role) {
      this.userStore.updateUserRole({ 
        userId: this.data.id, 
        role: this.selectedRole 
      });
      this.dialogRef.close();
    }
  }
}
