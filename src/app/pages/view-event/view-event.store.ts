import { inject, computed } from "@angular/core";
import { signalStore, withState, withMethods, patchState, withComputed, withHooks } from "@ngrx/signals";
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
    withMethods((state) => ({
        setEventId: (id: number) => {
            patchState(state, {
                eventId: id
            });
        },
    })),
    withComputed((state,  cycleEventStore = inject(CycleEventStore)) => ({
        event: computed(() => cycleEventStore.getCycleEvent(state.eventId())),
    }))
);