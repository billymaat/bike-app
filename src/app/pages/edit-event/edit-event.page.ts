import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CycleEventStore } from '../../store/cycle-event-store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-event',
  imports: [CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-event.page.html',
  styleUrl: './edit-event.page.scss'
})
export class EditEventPage {
  store = inject(CycleEventStore);
  private activatedRoute = inject(ActivatedRoute);
  eventId = signal<number>(0);
  
  eventForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
  });

  constructor() {
    this.activatedRoute.params.subscribe(params => {
      this.eventId.set(+params['id']);
    });

    effect(() => {
      const event = this.store.getCycleEvent(this.eventId());
      if (event) {
        this.eventForm.setValue({
          name: event.name,
          description: event.description,
          date: event.date ? event.date.toISOString().split('T')[0] : '',
          location: event.location
        });
      }
    })
  }

  onSubmit() {
    const updatedEvent = {
      id: this.eventId(),
      name: this.eventForm.value.name || '',
      description: this.eventForm.value.description || '',
      date: this.eventForm.value.date ? new Date(this.eventForm.value.date) : new Date(),
      location: this.eventForm.value.location || ''
    };

    this.store.addCycleEvent(updatedEvent);
    console.log('Event updated:', updatedEvent);
  }
}
