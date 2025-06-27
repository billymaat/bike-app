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

    this.store.updateCycleEvent(updatedEvent);
    this.dialogRef.close(updatedEvent);
    console.log('Event updated:', updatedEvent);
  }
}
