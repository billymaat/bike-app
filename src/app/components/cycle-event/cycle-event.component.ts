import { Component, input, InputSignal, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CycleEvent } from '../../models/cycle-event';
import { MatIconModule } from '@angular/material/icon';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'cycle-event',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './cycle-event.component.html',
  styleUrl: './cycle-event.component.scss'
})
export class CycleEventComponent {
  cycleEvent = input.required<CycleEvent>();
  showEditButton: InputSignal<boolean> = input(false);
  showDeleteButton: InputSignal<boolean> = input(false);
  showViewEventButton: InputSignal<boolean> = input(false);
  
  editClicked = output<void>();
  deleteClicked = output<void>();
  viewClicked = output<void>();

  onEditClicked() {
    this.editClicked.emit();
  }

  onDeleteClicked() {
    this.deleteClicked.emit();
  }

  onViewClicked() {
    this.viewClicked.emit();
  }
}
