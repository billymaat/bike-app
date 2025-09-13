import { Component, computed, effect, Inject, inject, signal } from '@angular/core';
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
import { CycleEvent, CycleEventUpdateRequest } from '../../models/cycle-event';
import { EditEventStore } from './edit-event-store';

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
  providers: [
    provideNativeDateAdapter(), 
    EditEventStore],
  templateUrl: './edit-event.page.html',
  styleUrl: './edit-event.page.scss'  
})
export class EditEventComponent {

  public dialogRef = inject(MatDialogRef<EditEventComponent>);
  public data = inject(MAT_DIALOG_DATA);
  private editEventStore = inject(EditEventStore);
  private originalEvent: CycleEvent | null = null;
  store = inject(CycleEventStore);
  private activatedRoute = inject(ActivatedRoute);
  
  eventForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl<Date>(new Date()),
    time: new FormControl(''), // Add time control
    location: new FormControl(''),
    attendees: new FormControl<number[]>([]),
    maxAttendees: new FormControl(0)
  });

  constructor() {
    console.log("EditEventComponent initialized with data:", this.data);
    console.log(this.data.eventId);
    
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.editEventStore.setEventId(+params['id']);
      }
    });

    effect(() => {
      const event = this.editEventStore.cycleEvent();
      if (event) {
        if (!this.originalEvent) {
          this.originalEvent = { ...event };
        }
        
        const eventDate = event.date ? new Date(event.date) : new Date();

        const d = new Date(eventDate);
        d.setHours(0, 0, 0, 0);

        const t = eventDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

        console.log('Setting form values for event:', t);
        this.eventForm.setValue({
          id: event.id,
          name: event.name,
          description: event.description,
          date: d,
          time: t,
          location: event.location,
          attendees: event.attendees || [],
          maxAttendees: event.maxAttendees || 0
        });
      }
    })

    // set event id
    this.editEventStore.setEventId(this.data.eventId || 0);
  }

  onSubmit() {
    const id = this.editEventStore.eventId();
    const formDate = this.eventForm.value.date;
    let formTime: Date | undefined = undefined;
    if (this.eventForm.value.time) {
      const [hours, minutes] = this.eventForm.value.time.split(':').map(Number);
      formTime = new Date(1970, 0, 1, hours, minutes);
    }

    let combinedDate: Date | undefined;
    if (formDate && formTime) {
      combinedDate = new Date(formDate);
      combinedDate.setHours(formTime.getHours(), formTime.getMinutes(), 0, 0);
    }

    console.log(formDate);
    console.log(formTime)
    const updatedEvent: CycleEventUpdateRequest = {
      name: this.eventForm.value.name != this.originalEvent?.name
        ? this.eventForm.value.name || ''
        : undefined,
      description: this.eventForm.value.description != this.originalEvent?.description
        ? this.eventForm.value.description || ''
        : undefined,
      date: combinedDate,
      location: this.eventForm.value.location != this.originalEvent?.location
        ? this.eventForm.value.location || ''
        : undefined,
      attendees: undefined,
      maxAttendees: undefined,
    };

    this.store.updateCycleEvent({ id: id, request: updatedEvent});
    this.dialogRef.close(updatedEvent);
    console.log('Event updated:', updatedEvent);
  }

  isFormChanged(): boolean {
    if (!this.originalEvent) return false;

    const originalDate = this.originalEvent.date
      ? new Date(this.originalEvent.date)
      : new Date();
    
  
    const o = new Date(originalDate);
    o.setHours(0, 0, 0, 0);
    const t = new Date(originalDate);
    t.setFullYear(1970, 0, 1);
    const originalDateStr = originalDate.toISOString().split('T')[0];
    const originalTimeStr = originalDate.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    const isChanged =
      (this.eventForm.value.name || '') !== (this.originalEvent.name || '') ||
      (this.eventForm.value.description || '') !== (this.originalEvent.description || '') ||
      (this.eventForm.value.location || '') !== (this.originalEvent.location || '') ||
      this.eventForm.value.date !== o ||
      this.eventForm.value.time !== originalTimeStr;

    return isChanged;
  }
}
