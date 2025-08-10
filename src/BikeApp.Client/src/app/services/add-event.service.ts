import { Injectable } from '@angular/core';
import { CycleEvent } from '../models/cycle-event';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {

  constructor() { }

  // Method to add an event
  addEvent(cycleEvent: CycleEvent): void {
    // Logic to add the event, e.g., save to a database or send to a server
    console.log('Event added:', cycleEvent);
  }
}
