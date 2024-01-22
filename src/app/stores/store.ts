import { createContext, useContext } from "react";
import UserStore from "./userStore";
import NavStore from "./navStore";
import CommonStore from "./commonStore";
import NotificationsStore from "./notificationsStore";
import LocalizationsStore from "./localizationsStore";
import PlacesSearchStore from "./placesSearchStore";

interface Store {
  userStore: UserStore;
  navStore: NavStore;
  commonStore: CommonStore;
  notificationsStore: NotificationsStore;
  localizationsStore: LocalizationsStore;
  placesSearchStore: PlacesSearchStore;
}

export const store: Store = {
  userStore: new UserStore(),
  navStore: new NavStore(),
  commonStore: new CommonStore(),
  notificationsStore: new NotificationsStore(),
  localizationsStore: new LocalizationsStore(),
  placesSearchStore: new PlacesSearchStore()
}

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}