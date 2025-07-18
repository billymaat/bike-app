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
        }),
        upcomingEvents: computed(() => {
            // get the upcoming events that are in the future
            // and order them by the soonest first
            return cycleEventStore.entities().filter(event => new Date(event.date) >= new Date())
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }),
        pastEvents: computed(() => {
            // get the past events that are in the past
            // and order them by the most recent first
            return cycleEventStore.entities().filter(event => new Date(event.date) < new Date())
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }),
    }))
)