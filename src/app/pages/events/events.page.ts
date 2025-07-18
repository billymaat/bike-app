import { Component, computed, effect, inject, signal, Signal } from '@angular/core';
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
import { CycleEventQuery, EventsStore } from './events.store';
import { CycleEventComponent } from "../../components/cycle-event/cycle-event.component";

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
    MatDatepickerModule,
    CycleEventComponent
],
  providers: [provideNativeDateAdapter(), EventsStore],
  templateUrl: './events.page.html',
  styleUrl: './events.page.scss'
})
export class EventsPage {

  events: Signal<CycleEvent[]>


  store = inject(EventsStore);
  router = inject(Router);
  readonly dialog = inject(MatDialog);

  filterForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    name: new FormControl(''),
  });

  constructor() {
    this.events = computed(() => {
      return this.store.filteredEvents().sort((a, b) => a.date.getTime() - b.date.getTime());
    });
  }

  selectEvent(event: CycleEvent) {
    this.dialog.open(EditEventComponent, {
      width: '400px',
      data: {
        eventId: event.id
      }
    })
  }

  deleteEvent(evt: any, event: CycleEvent) {
    this.store.removeCycleEvent(event.id);
  }
  
  viewEvent(cycleEvent: CycleEvent) {
    this.router.navigate(['/view-event', cycleEvent.id]);
  }

  applyFilters() {
    const query: CycleEventQuery = {
      startDate: this.filterForm.value.startDate ? new Date(this.filterForm.value.startDate) : undefined,
      endDate: this.filterForm.value.endDate ? new Date(this.filterForm.value.endDate) : undefined,
      name: this.filterForm.value.name || '',
    }
    this.store.setFilter(query);
  }
}
