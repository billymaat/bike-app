import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { CycleEventStore } from "../../store/cycle-event-store";
import { computed, inject } from "@angular/core";
import { CycleEventsFilterService } from "../../services/cycle-events-filter.service";

type EventsState = {
    // filteredEvents: CycleEvent[];
    isLoading: boolean;
    filter: CycleEventQuery;
}

export interface CycleEventQuery {
    name?: string;
    startDate?: Date;
    endDate?: Date;
    eventType?: EventTypeFilter;
}

enum EventTypeFilter {
    Upcoming = 'upcoming',
    Past = 'past',
    All = 'all'
}

export const EventsStore = signalStore(
    { providedIn: 'root' },
    withState<EventsState>({
        // filteredEvents: [],
        isLoading: false,
        filter: {
            eventType: EventTypeFilter.Upcoming
        }
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
    withComputed((state, cycleEventStore = inject(CycleEventStore), cycleEventFilterService = inject(CycleEventsFilterService)) => ({
        filteredEvents: computed(() => {
            return cycleEventFilterService.filterEvents(cycleEventStore.entities(), state.filter());
        }),
        allEvents: computed(() => {
            return cycleEventStore.entities();
        }),
    }))
)