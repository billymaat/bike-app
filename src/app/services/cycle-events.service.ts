import { Injectable } from '@angular/core';
import { CycleEvent, CycleEventAddRequest } from '../models/cycle-event';
import { SeedData } from '../store/seed-data';

@Injectable({
  providedIn: 'root'
})
export class CycleEventsService {

  private _cycleEvents: CycleEvent[] = [];
  constructor() { 
    // seed the data
    this._cycleEvents = SeedData;
  }

  get cycleEvents(): CycleEvent[] {
    return [...this._cycleEvents]; // return a copy to prevent external mutation
  }

  addCycleEvent(event: CycleEventAddRequest): CycleEvent {
    const newEvent: CycleEvent = {
      ...event,
      id: this._cycleEvents.length ? Math.max(...this._cycleEvents.map(e => e.id)) + 1 : 1, // simple ID generation
      attendees: [],
    };
    this._cycleEvents.push(newEvent);
    return newEvent;
  }

  getCycleEvent(id: number): CycleEvent | null {
    const event = this._cycleEvents.find(e => e.id === id);
    return event ? { ...event } : null;
  } 

  updateCycleEvent(event: CycleEvent): void {
    const index = this._cycleEvents.findIndex(e => e.id === event.id);
    if (index !== -1) {
      this._cycleEvents[index] = event;
    }
  }

  removeCycleEvent(id: number): void {
    this._cycleEvents = this._cycleEvents.filter(e => e.id !== id);
  }
}
