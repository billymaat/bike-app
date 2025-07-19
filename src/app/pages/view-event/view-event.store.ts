import { inject, computed } from "@angular/core";
import { signalStore, withState, withMethods, patchState, withComputed, withHooks } from "@ngrx/signals";
import { CycleEventStore } from "../../store/cycle-event-store";
import { CurrentUserStore } from "../../store/current-user-store";

type ViewEventState = {
    isLoading: boolean;
    eventId: number;
}
export const ViewEventStore = signalStore(
    withState<ViewEventState>({
        isLoading: false,
        eventId: 0
    }),
    withMethods((state, cycleEventStore = inject(CycleEventStore), currentUserStore = inject(CurrentUserStore)) => ({
        setEventId: (id: number) => {
            patchState(state, {
                eventId: id
            });
        },
        setAttending: (attending: boolean) => {
            // Logic to handle attending or not attending
            const event = cycleEventStore.getCycleEvent(state.eventId())
            const userId = currentUserStore.user()?.id;
            if (!event || !userId) {
                console.error('Event or user not found');
                return;
            }
            
            if (attending) {
                const updatedEvent = { ...event, attendees: [...event.attendees, userId ] };
                cycleEventStore.updateCycleEvent(updatedEvent);
                console.log('User is attending the event:', updatedEvent);
            } else {
                const updatedEvent = { ...event, attendees: event.attendees.filter(id => id !== userId) };
                cycleEventStore.updateCycleEvent(updatedEvent);
            }
        }
    })),
    withComputed((state, cycleEventStore = inject(CycleEventStore), currentUserStore = inject(CurrentUserStore)) => ({
        event: computed(() => {
            // This will re-compute when the entities change
            const events = cycleEventStore.entities();
            return events.find(e => e.id === state.eventId()) ?? null;
        }),
        isAttending: computed(() => {
            const event = cycleEventStore.entities().find(e => e.id === state.eventId());
            const userId = currentUserStore.user()?.id;
            if (!event || !userId) return false;
            return event.attendees.includes(userId);
        }),
    }))
);