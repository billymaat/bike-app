import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CycleEvent } from '../../models/cycle-event';
import { User } from '../../models/user';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent {
  @Input() event: CycleEvent | null = null;
  @Input() attendingUsers: User[] = [];
  @Input() isAttending: boolean = false;
  @Input() showActions: boolean = true;
  @Input() isDialog: boolean = false;
  
  @Output() attendEvent = new EventEmitter<void>();
  @Output() notAttendEvent = new EventEmitter<void>();

  // Optional dialog support
  public dialogRef = inject(MatDialogRef<EventDetailsComponent>, { optional: true });
  public dialogData = inject(MAT_DIALOG_DATA, { optional: true });

  constructor() {
    // If used in dialog, get data from dialog
    if (this.dialogData) {
      this.event = this.dialogData.event;
      this.attendingUsers = this.dialogData.attendingUsers || [];
      this.isAttending = this.dialogData.isAttending || false;
      this.showActions = this.dialogData.showActions !== false;
      this.isDialog = true;
    }
  }

  onAttendEvent() {
    this.attendEvent.emit();
  }

  onNotAttendEvent() {
    this.notAttendEvent.emit();
  }

  closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
