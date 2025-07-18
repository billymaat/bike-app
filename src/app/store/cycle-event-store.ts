import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { CycleEvent, CycleEventAddRequest } from '../models/cycle-event';
import {
  addEntity,
  removeEntity,
  setAllEntities,
  setEntity,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { SeedData } from './seed-data';
import { CycleEventsService } from '../services/cycle-events.service';
import { inject } from '@angular/core';

type CycleEventState = {
  cycleEvents: CycleEvent[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: CycleEventState = {
  cycleEvents: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const CycleEventStore = signalStore(
  { providedIn: 'root' },
  withEntities<CycleEvent>(),
  withState(initialState),
  withHooks({
    onInit(store, cycleEventService = inject(CycleEventsService)) {      
      //patchState(store, setAllEntities(SeedData));
      //Initialize the store with any necessary data or state
      patchState(store, {
        isLoading: false,
        filter: { query: '', order: 'asc' },
      });
      // simulate a delay to mimic data fetching
      patchState(store, { isLoading: true });
      setTimeout(() => {
        patchState(store, {
          isLoading: false,
        });
        patchState(store, setAllEntities(cycleEventService.cycleEvents));
      }, 1000);
      
    }
  }),
  withMethods((store, cycleEventService = inject(CycleEventsService)) => ({
    seedData(events: CycleEvent[]) {
      patchState(store, setAllEntities(events));
    },
    addCycleEvent: (event: CycleEventAddRequest) => {
      const evt = cycleEventService.addCycleEvent(event);
      patchState(store, addEntity(evt));
    },
    updateCycleEvent: (event: CycleEvent) => {
      cycleEventService.updateCycleEvent(event);
      patchState(store, updateEntity({ id: event.id, changes: event }));
    },
    removeCycleEvent: (eventId: number) => {
      cycleEventService.removeCycleEvent(eventId);
      patchState(store, removeEntity(eventId));
    },
    getCycleEvent: (eventId: number) => {
      const event = cycleEventService.getCycleEvent(eventId);
      return event;
      // return store.entities().find(event => event.id === eventId) || null;
    }
  }))
);