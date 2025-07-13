import { inject, computed } from "@angular/core";
import { signalStore, withState, withMethods, patchState, withComputed, withHooks } from "@ngrx/signals";
import { CycleEvent } from "../../models/cycle-event";
import { CycleEventStore } from "../../store/cycle-event-store";

type ViewEventState = {
    isLoading: boolean;
    eventId: number;
}
export const ViewEventStore = signalStore(
    withState<ViewEventState>({
        isLoading: false,
        eventId: 0
    }),
    withMethods((state, cycleEventStore = inject(CycleEventStore)) => ({
        setLoading: (loading: boolean) => {
            patchState(state, {
                isLoading: loading
            });
        },
        setEventId: (id: number) => {
            patchState(state, {
                eventId: id
            });
        },
        getCycleEvent: (id: number): CycleEvent | null => {
            return cycleEventStore.getCycleEvent(id);
        }
    })),
    withComputed((state,  cycleEventStore = inject(CycleEventStore)) => ({
        event: computed(() => cycleEventStore.getCycleEvent(state.eventId())),
    }))
);