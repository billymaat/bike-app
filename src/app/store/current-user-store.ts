import { signalStore, withState, withHooks, patchState, withMethods } from "@ngrx/signals";
import { User } from "../models/user";
import { userSeedData } from "./user-seed-data";

type CurrentUserState = {
    user: User | null;
};

const initialState: CurrentUserState = {
    user: userSeedData[0],
};

export const CurrentUserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    // withHooks({
    //     onInit(store) {
    //         // Initialize the store with any necessary data or state
    //         patchState(store, {
    //             user: null,
    //         });
    //     }
    // }),
    withMethods((store) => ({
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
            patchState(store, { user: userSeedData[0] });
        }
    }))
);