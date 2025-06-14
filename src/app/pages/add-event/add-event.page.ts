import { CommonModule } from '@angular/common';
import { Component, inject, Signal, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AddEventService } from '../../services/add-event.service';
import { CycleEvent } from '../../models/cycle-event';
import { CycleEventStore } from '../../store/cycle-event-store';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-add-event',
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatDatepickerModule,
    MatListModule,
    MatIcon
  ],
  providers: [provideNativeDateAdapter(),
    CycleEventStore,
  ],
  templateUrl: './add-event.page.html',
  styleUrl: './add-event.page.scss'
})
export class AddEventPage {
  readonly store = inject(CycleEventStore);

  eventForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
  });

  idCounter: number = 4;
  events: Signal<CycleEvent[]>;

  constructor(private addEventService: AddEventService) {
      this.events = this.store.entities;

      console.log(this.events());
  }

  onSubmit() {
    // Here you would typically send the form data to your backend or service
    this.store.addCycleEvent({
      id: this.idCounter++,
      name: this.eventForm.value.name || '',
      description: this.eventForm.value.description || '',
      date: this.eventForm.value.date ? new Date(this.eventForm.value.date) : new Date(),
      location: this.eventForm.value.location || ''
    })
  }


  deleteEvent(event: CycleEvent) {
    this.store.removeCycleEvent(event.id);
  }
}
