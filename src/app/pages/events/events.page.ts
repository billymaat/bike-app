import { Component, inject, Signal } from '@angular/core';
import { CycleEvent } from '../../models/cycle-event';
import { CycleEventStore } from '../../store/cycle-event-store';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditEventComponent } from '../edit-event/edit-event.page';

@Component({
  selector: 'app-events',
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
  ],
  templateUrl: './events.page.html',
  styleUrl: './events.page.scss'
})
export class EventsPage {
  events: Signal<CycleEvent[]>;

  store = inject(CycleEventStore);
  router = inject(Router);
  readonly dialog = inject(MatDialog);

  constructor() {
    this.events = this.store.entities;
  }

  selectEvent(event: CycleEvent) {
    // this.router.navigate(['/edit-event', event.id]);
    console.log('Selected event:', event);
    this.dialog.open(EditEventComponent, {
      width: '400px',
      data: {
        eventId: event.id
      }
    })
  }

  deleteEvent(evt: any, event: CycleEvent) {
    evt.stopPropagation(); // Prevent the click from propagating to the list item
    this.store.removeCycleEvent(event.id);
  }
}
