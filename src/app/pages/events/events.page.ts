import { Component, effect, inject, signal, Signal } from '@angular/core';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-events',
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './events.page.html',
  styleUrl: './events.page.scss'
})
export class EventsPage {
  events = signal<CycleEvent[]>([]);

  store = inject(CycleEventStore);
  router = inject(Router);
  readonly dialog = inject(MatDialog);

  filterForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    name: new FormControl(''),
  });


  filteredEvents() {
    let filtered = this.events();
    if (this.filterForm.value.name) {
      const term = this.filterForm.value.name.toLowerCase();
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term)
      );
    }
    if (this.filterForm.value.startDate) {
      filtered = filtered.filter(event =>
        new Date(event.date) >= new Date(this.filterForm.value.startDate!)
      );
    }
    if (this.filterForm.value.endDate) {
      filtered = filtered.filter(event =>
        new Date(event.date) <= new Date(this.filterForm.value.endDate!)
      );
    }
    return filtered;
  }

  constructor() {
    effect(() => {
      this.events.set(this.store.entities());
    })
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

  applyFilters() {
    const filtered = this.filteredEvents();
    this.events.set(filtered);
  }
}
