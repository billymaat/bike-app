import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { CycleEvent } from '../models/cycle-event';
import {
  addEntity,
  removeEntity,
  setAllEntities,
  setEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { SeedData } from './seed-data';

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
    onInit(store) {      
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
        patchState(store, setAllEntities(SeedData));
      }, 1000);
      
    }
  }),
  withMethods((store) => ({
    seedData(events: CycleEvent[]) {
      patchState(store, setAllEntities(events));
    },
    addCycleEvent: (event: CycleEvent) => {
      patchState(store, addEntity(event));
    },
    removeCycleEvent: (eventId: number) => {
      patchState(store, removeEntity(eventId));
    },
    getCycleEvent: (eventId: number) => {
      return store.entities().find(event => event.id === eventId) || null;
    }
  }))
);