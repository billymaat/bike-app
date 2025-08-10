import { computed, inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState, withComputed } from "@ngrx/signals";
import { CycleEvent } from "../../models/cycle-event";
import { CycleEventStore } from "../../store/cycle-event-store";

type DashboardState = {
    isLoading: boolean;
}

export const DashboardStore = signalStore(
    withState<DashboardState>({
        isLoading: false,
    }),
    withMethods((state) => ({
        setLoading: (loading: boolean) => {
            patchState(state, {
                isLoading: loading
            });
        },
    })),
    withComputed((state, cycleEventStore = inject(CycleEventStore)) => ({
        isLoading: computed(() => state.isLoading()),
        latestEvents: computed(() => {
            let cycleEvents = cycleEventStore.entities();
            // get the closest 5 events to today that are in the future, and order them by the soonest first
            cycleEvents = cycleEvents.filter(event => new Date(event.date) >= new Date());
            // cycleEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            return cycleEvents.slice(0, 5);
        })
    }))
);