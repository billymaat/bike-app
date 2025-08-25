import { signalStore, withState, withMethods, patchState, withComputed } from "@ngrx/signals";
import { CycleEvent } from "../../models/cycle-event";
import { computed, inject } from "@angular/core";
import { CycleEventStore } from "../../store/cycle-event-store";

type EditEventState = {
    isLoading: boolean;
    eventId: number;
}

const initialState: EditEventState = {
    isLoading: false,
    eventId: 0,
};

export const EditEventStore = signalStore(
    withState(initialState),
    withMethods((store, cycleEventStore = inject(CycleEventStore)) => ({
        setLoading: (isLoading: boolean) => {
            patchState(store, { isLoading });
        },
        setEventId: (eventId: number) => {
            patchState(store, { eventId });
        }
    })),
    withComputed((state, cycleEventStore = inject(CycleEventStore)) => ({
        cycleEvent: computed(() => {
            return cycleEventStore.getCycleEvent(state.eventId());
        }),
    }))
);