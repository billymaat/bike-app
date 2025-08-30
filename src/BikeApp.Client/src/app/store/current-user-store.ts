import { signalStore, withState, withHooks, patchState, withMethods } from "@ngrx/signals";
import { User } from "../models/user";
import { UserStore } from "../pages/users/users.store";
import { inject } from "@angular/core";

type CurrentUserState = {
    user: User | null;
};
const initialState: CurrentUserState = {
    user: null
};

export const CurrentUserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withHooks({
        onInit(store, userStore = inject(UserStore)) {
            // Initialize the store with any necessary data or state
            // const usrs = userStore.users()
            // const indx = Math.floor(Math.random() * usrs.length);
            // const user = userStore.getUserById(indx);
            // patchState(store, {
            //     user: user,
            // });
        }
    }),
    withMethods((store, userStore = inject(UserStore)) => ({
        setUser: (user: User) => {
            patchState(store, { user });
        },
        clearUser: () => {
            patchState(store, { user: null });
        },
        getUser: () => {
            return store.user;
        },
        login: () => {
            const usrs = userStore.users()
            if (usrs == null) {
                return;
            }
            const indx = Math.floor(Math.random() * usrs.length);
            const user = userStore.getUserById(indx);
            console.log(user);
            patchState(store, { user: user });
        }
    }))
);