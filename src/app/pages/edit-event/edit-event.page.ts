import { Component, effect, Inject, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CycleEventStore } from '../../store/cycle-event-store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CycleEvent } from '../../models/cycle-event';

@Component({
  selector: 'app-edit-event',
  imports: [CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './edit-event.page.html',
  styleUrl: './edit-event.page.scss'  
})
export class EditEventComponent {

  public dialogRef = inject(MatDialogRef<EditEventComponent>);
  public data = inject(MAT_DIALOG_DATA);

  private originalEvent: CycleEvent | null = null;
  store = inject(CycleEventStore);
  private activatedRoute = inject(ActivatedRoute);
  eventId = signal<number>(0);
  
  eventForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
    attendees: new FormControl<number[]>([]), // Assuming attendees is an array of user IDs
    maxAttendees: new FormControl(0) // Assuming maxAttendees is a number
  });

  constructor() {
    console.log("EditEventComponent initialized with data:", this.data);
    console.log(this.data.eventId);
    this.eventId.set(this.data.eventId || 0);
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.eventId.set(+params['id']);
      }
    });

    effect(() => {
      console.log('Event ID changed:', this.eventId());
      const event = this.store.getCycleEvent(this.eventId());
      if (event) {
        if (!this.originalEvent)
        {
          this.originalEvent = { ...event }; // Store the original event
        }
        
        this.eventForm.setValue({
          id: event.id,
          name: event.name,
          description: event.description,
          date: event.date ? event.date.toISOString().split('T')[0] : '',
          location: event.location,
          attendees: event.attendees || [],
          maxAttendees: event.maxAttendees || 0
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
      location: this.eventForm.value.location || '',
      attendees: this.eventForm.value.attendees || [],
      maxAttendees: this.eventForm.value.maxAttendees || 0
    };

    this.store.updateCycleEvent(updatedEvent);
    this.dialogRef.close(updatedEvent);
    console.log('Event updated:', updatedEvent);
  }

  isFormChanged(): boolean {
      if (!this.originalEvent) return false;

    // Normalize date to YYYY-MM-DD string for both
    const originalDate = this.originalEvent.date
      ? new Date(this.originalEvent.date).toISOString().split('T')[0]
      : '';
    const selectedEventDate: Date = this.eventForm.value.date ? new Date(this.eventForm.value.date) : new Date();

    const formDate = selectedEventDate.toISOString().split('T')[0];

    // Compare all fields
    const isChanged =
      (this.eventForm.value.name || '') !== (this.originalEvent.name || '') ||
      (this.eventForm.value.description || '') !== (this.originalEvent.description || '') ||
      (this.eventForm.value.location || '') !== (this.originalEvent.location || '') ||
      formDate !== originalDate;

    return isChanged;
  }
}
