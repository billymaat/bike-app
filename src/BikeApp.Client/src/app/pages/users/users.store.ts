import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { User } from "../../models/user";
import { addEntity, setAllEntities, withEntities } from "@ngrx/signals/entities";
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
      // this is repeated code I need to figure out how to remove
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
  withMethods((store, usersService = inject(UsersService)) => ({
    getUserById(userId: number) {
      const entity = store.entityMap()[userId];
      if (entity) {
        return entity;
      } else {
        this.loadUserById(userId);
      }
      return null;
    },
    loadAllUsers: rxMethod<void>(
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
      ),
    loadUserById: rxMethod<number>(
      pipe(
        switchMap((userId) => 
          usersService.getUserById(userId).pipe(
            tap((newUser) => {
              if (newUser) {
                patchState(store, addEntity(newUser));
              }
            }),
            catchError((err) => {
              console.error(err);
              return of(null);
            })
          )
      ))
    )
  })),
  withComputed((state) => ({
    users: computed(() => {
      return state.entities();
    })
  }))
);