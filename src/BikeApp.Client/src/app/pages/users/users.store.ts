import { patchState, signalStore, withComputed, withHooks, withState } from "@ngrx/signals";
import { User } from "../../models/user";
import { userSeedData } from "../../store/user-seed-data";
import { setAllEntities, withEntities } from "@ngrx/signals/entities";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { pipe, tap, switchMap, catchError, of } from "rxjs";
import { UsersService } from "../../services/users.service";
import { computed, inject } from "@angular/core";

type UserStoreState = {
  isLoading: boolean;
};

const initialState: UserStoreState = {
  isLoading: false,
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withEntities<User>(),
  withState<UserStoreState>(initialState),
  withHooks({
    onInit(store, usersService = inject(UsersService)) {
      const loadUsers = rxMethod<void>(
        pipe(
          tap(() => patchState(store, { isLoading: true })),
          switchMap(() =>
            usersService.getUsers().pipe(
              tap((users) => {
                patchState(store, {
                  isLoading: false,
                });
                patchState(store, setAllEntities(users));
              }),
              catchError((err) => {
                patchState(store, { isLoading: false });
                return of([]); // keep stream alive
              }),
            )
          ),
        )
      );
      loadUsers();
    }
  }),
  withComputed((state) => ({
    users: computed(() => state.entities())
  }))
);