import { inject, computed } from "@angular/core";
import { signalStore, withState, withMethods, patchState, withComputed, withHooks } from "@ngrx/signals";
import { CycleEventStore } from "../../store/cycle-event-store";
import { CurrentUserStore } from "../../store/current-user-store";
import { UserStore } from "../../pages/users/users.store";
import { User } from "../../models/user";

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
            if (!event) {
                console.error('Event not found');
                return;
            } else if (!userId) {
                console.error('User not found');
                return;
            }
            
            if (attending) {
                const updatedEvent = { ...event, attendees: [...event.attendees, userId ] };
                cycleEventStore.updateCycleEvent({ id: event.id, request: updatedEvent});
                console.log('User is attending the event:', updatedEvent);
            } else {
                const updatedEvent = { ...event, attendees: event.attendees.filter(id => id !== userId) };
                cycleEventStore.updateCycleEvent({ id: event.id, request: updatedEvent});
            }
        }
    })),
    withComputed((state, cycleEventStore = inject(CycleEventStore), currentUserStore = inject(CurrentUserStore), userStore = inject(UserStore)) => ({
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
        attendingUsers: computed(() => {
            const event = cycleEventStore.entities().find(e => e.id === state.eventId());
            if (!event) return [];
            let retUsers: User[] = [];
            event.attendees.forEach(u => {
                const user = userStore.getUserById(u);
                if (user) {
                    retUsers.push(user);
                }
            });
            return retUsers;
        }),
    }))
);