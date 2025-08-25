import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { CycleEvent, CycleEventAddRequest } from '../models/cycle-event';
import {
  addEntity,
  removeEntity,
  setAllEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { CycleEventsService } from '../services/cycle-events.service';
import { computed, inject } from '@angular/core';
import { pipe, tap, switchMap, catchError, of } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

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
      const loadEvents = rxMethod<void>(
        pipe(
          tap(() => patchState(store, { isLoading: true })),
          switchMap(() =>
            cycleEventService.getAllCycleEvents().pipe(
              tap((events) => {
                patchState(store, {
                  isLoading: false,
                });
                patchState(store, setAllEntities(events));
              }),
              catchError((err) => {
                patchState(store, { isLoading: false });
                return of([]); // keep stream alive
              }),
            )
          ),
        )
      );
      loadEvents();
    }
  }),
  withMethods((store, cycleEventService = inject(CycleEventsService)) => ({
    getCycleEvent(eventId: number) {
      const entity = store.entityMap()[eventId];
      if (entity) {
        return entity;
      }
      else {
        this.loadEventById(eventId);
      }
      return null;
    },
    addCycleEvent: rxMethod<CycleEventAddRequest>(
      pipe(
        switchMap((event) =>
          cycleEventService.addCycleEvent(event).pipe(
            tap((evt) => {
              patchState(store, addEntity(evt));
            }),
            catchError((err) => {
              // optional error handling
              console.error('Failed to add cycle event', err);
              return of(null); // keep stream alive
            })
          )
        )
      )
    ),
    updateCycleEvent: rxMethod<CycleEvent>(
      pipe(
        switchMap((event) =>
          cycleEventService.updateCycleEvent(event.id, event).pipe(
            tap((updated) => {
              patchState(store, updateEntity({ id: event.id, changes: event }));
            }),
            catchError((err) => {
              console.error('Failed to update cycle event', err);
              return of(null); // keep stream alive
            })
          )
        )
      )
    ),
    removeCycleEvent: (eventId: number) => {
      cycleEventService.removeCycleEvent(eventId);
      patchState(store, removeEntity(eventId));
    },
    loadEventById: rxMethod<number>(
      pipe (
        switchMap((eventId) => 
          cycleEventService.getCycleEvent(eventId).pipe(
            tap((newEvent) => {
              if (newEvent) {
                patchState(store, addEntity(newEvent)); 
              }
            }),
            catchError((err) => {
              console.error('Failed to fetch cycle event', err);
              return of(null); // keep stream alive
            })
          )
        )
      )),
  })),
);