import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CycleEvent } from '../../models/cycle-event';

@Component({
  selector: 'app-delete-event-dialog',
  template: `
    <h2 mat-dialog-title>Delete Event</h2>
    <mat-dialog-content>
      Are you sure you want to delete the event "{{ data.event.name }}"?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="false">Cancel</button>
      <button mat-button color="warn" [mat-dialog-close]="true">Delete</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class DeleteEventDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { event: CycleEvent }
  ) {}
}
