import { signalStore, withState } from "@ngrx/signals";
import { User } from "../../models/user";
import { userSeedData } from "../../store/user-seed-data";

type UserStoreState = {
  users: User[];
};

export const UserStore = signalStore(
  withState<UserStoreState>({
    users: userSeedData
  })
);  