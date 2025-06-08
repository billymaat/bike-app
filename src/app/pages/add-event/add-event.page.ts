import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { AddEventService } from '../../services/add-event.service';
import { CycleEvent } from '../../models/cycle-event';

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
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-event.page.html',
  styleUrl: './add-event.page.scss'
})
export class AddEventPage {

  eventForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    location: new FormControl(''),
  });

  events = signal<CycleEvent[]>([]);

  constructor(private addEventService: AddEventService) {}

  onSubmit() {
    console.log('Event submitted:', this.eventForm);
    // Here you would typically send the form data to your backend or service
  }
}
