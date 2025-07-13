import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { CycleEventStore } from "../../store/cycle-event-store";
import { computed, inject } from "@angular/core";

type EventsState = {
    // filteredEvents: CycleEvent[];
    isLoading: boolean;
    filter: CycleEventQuery;
}

export interface CycleEventQuery {
    name?: string;
    startDate?: Date;
    endDate?: Date;
}

export const EventsStore = signalStore(
    withState<EventsState>({
        // filteredEvents: [],
        isLoading: false,
        filter: {}
    }),
    withMethods((state, cycleEventStore = inject(CycleEventStore)) => ({
        setFilter: (filter: CycleEventQuery) => {
            patchState(state, {
                filter: filter
            });
        },
        clearFilter: () => {
            patchState(state, {
                filter: {}
            });
        },
        setLoading: (loading: boolean) => {
            patchState(state, {
                isLoading: loading
            });
        },
        removeCycleEvent: (eventId: number) => {
            cycleEventStore.removeCycleEvent(eventId);
        }
    })),
    withComputed((state, cycleEventStore = inject(CycleEventStore)) => ({
        filteredEvents: computed(() => {
            let filtered = cycleEventStore.entities();
            const nameFilter = state.filter().name?.toLowerCase();
            if (nameFilter) {
                filtered = filtered.filter(event =>
                    event.name.toLowerCase().includes(nameFilter) ||
                    event.location.toLowerCase().includes(nameFilter)
                );
            }
            const startDate = state.filter().startDate;
            if (startDate) {
                filtered = filtered.filter(event =>
                    new Date(event.date) >= new Date(startDate)
                );
            }
            const endDate = state.filter().endDate;
            if (endDate) {
                filtered = filtered.filter(event =>
                    new Date(event.date) <= new Date(endDate)
                );
            }
            return filtered;
        })
    }))
)