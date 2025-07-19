import { Injectable } from '@angular/core';
import { CycleEvent } from '../models/cycle-event';

export interface CycleEventQuery {
    name?: string;
    startDate?: Date;
    endDate?: Date;
    eventType?: EventTypeFilter;
}

export enum EventTypeFilter {
    Upcoming = 'upcoming',
    Past = 'past',
    All = 'all'
}

@Injectable({
  providedIn: 'root'
})
export class CycleEventsFilterService {

  constructor() { }

  filterEvents(events: CycleEvent[], query: CycleEventQuery): CycleEvent[] {
    let filtered = [...events];

    const nameFilter = query.name?.toLowerCase();
    if (nameFilter) {
        filtered = filtered.filter(event =>
            event.name.toLowerCase().includes(nameFilter) ||
            event.location.toLowerCase().includes(nameFilter)
        );
    }
    const startDate = query.startDate;
    if (startDate) {
        filtered = filtered.filter(event =>
            new Date(event.date) >= new Date(startDate)
        );
    }
    const endDate = query.endDate;
    if (endDate) {
        filtered = filtered.filter(event =>
            new Date(event.date) <= new Date(endDate)
        );
    }

    if (query.eventType) {
      switch (query.eventType) {
        case EventTypeFilter.Upcoming:
          filtered = filtered.filter(event => new Date(event.date) >= new Date())
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
          break;
        case EventTypeFilter.Past:
          filtered = filtered.filter(event => new Date(event.date) < new Date())
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          break;
      }
    }

    return filtered;
  }
}
