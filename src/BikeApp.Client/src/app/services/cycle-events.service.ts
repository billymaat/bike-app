import { inject, Injectable } from '@angular/core';
import { CycleEvent, CycleEventAddRequest, CycleEventUpdateRequest } from '../models/cycle-event';
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

  addCycleEvent(event: CycleEventAddRequest): Observable<CycleEvent> {
    const dto = CycleEventMapper.toCycleEventAddRequestDto(event);
    return this.cycleClient.add(dto).pipe(
      map(e => CycleEventMapper.fromDto(e))
    );
  }

  getCycleEvent(id: number): Observable<CycleEvent | null> {
    return this.cycleClient.getById(id).pipe(
      map(event => event ? CycleEventMapper.fromDto(event) : null)
    );
  }

  updateCycleEvent(id: number, event: CycleEventUpdateRequest): Observable<void> {
    const dto = CycleEventMapper.toCycleEventUpdateRequestDto(event);
    console.log(dto);
    return this.cycleClient.put(id, dto);
  }

  removeCycleEvent(id: number): void {
    this._cycleEvents = this._cycleEvents.filter(e => e.id !== id);
  }
}
