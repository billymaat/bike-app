import { inject, Injectable } from '@angular/core';
import { CycleEvent, CycleEventAddRequest } from '../models/cycle-event';
import { SeedData } from '../store/seed-data';

import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CycleClient } from '../api/api';
import { CycleEventMapper } from '../mapping/cycle-event.mapper';

@Injectable({
  providedIn: 'root',
})
export class CycleEventsService {

  private _cycleEvents: CycleEvent[] = [];
  http = inject(HttpClient);

  cycleClient = inject(CycleClient);

  constructor() { 
    // seed the data
    this._cycleEvents = SeedData;
  }

  // Mock HTTP GET method to fetch all cycle events
  getAllCycleEvents(): Observable<CycleEvent[]> {
    // Simulate HTTP GET by returning an observable
    return this.cycleClient.getAll().pipe(
      map(o => o.map(e => CycleEventMapper.fromDto(e)))
    );
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
