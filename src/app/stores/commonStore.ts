import { makeAutoObservable, reaction, runInAction } from "mobx";
import { ApiResponse } from "../models/apiResponse";
import { store } from "./store";
import { v4 } from "uuid";
import { router } from "../../Router";
import { ToastOptions, toast } from "react-toastify";
import { User } from "firebase/auth";
import { LOCAL_KEY } from "../features/services/services-contact-form/services-contact-form.component";

export default class CommonStore {
  serverError: ApiResponse | null = null;
  deviceUuid: string | null = localStorage.getItem("device_uuid");
  meestToken: string | null = localStorage.getItem("meest_token");
  firebaseUser: User | null = null;
  firebaseUuid: string | null = localStorage.getItem("firebase_uuid");
  firebaseToken: string | null = localStorage.getItem("firebase_token");
  appLoaded: boolean = false;
  toastInfoOptions: ToastOptions = { className: "toastCustom" };
  toastErrorOptions: ToastOptions = { className: "toastErrorCustom" };

  // data of user which is currently being signed up (required for resending email)
  currentAuthData: { email: string; password: string | undefined } | null = null;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.deviceUuid,
      (deviceUuid) => {
        if (deviceUuid) localStorage.setItem("device_uuid", deviceUuid);
        else localStorage.removeItem("device_uuid");
      }
    );

    reaction(
      () => this.firebaseUuid,
      (firebaseUuid) => {
        if (firebaseUuid) localStorage.setItem("firebase_uuid", firebaseUuid);
        else localStorage.removeItem("firebase_uuid");
      }
    );

    reaction(
      () => this.firebaseToken,
      (firebaseToken) => {
        if (firebaseToken) localStorage.setItem("firebase_token", firebaseToken);
        else localStorage.removeItem("firebase_uuid");
      }
    );

    reaction(
      () => this.meestToken,
      async (meestToken) => {
        if (meestToken) {
          this.appLoaded = false;
          localStorage.setItem("meest_token", meestToken);
          await store.userStore.getCurrentUser();
          runInAction(() => (store.navStore.isSidebarOpened = false));
          router.navigate("/");
          this.setAppLoaded(true);
        } else {
          localStorage.removeItem("meest_token");
          runInAction(() => (store.userStore.user = null));
          router.navigate("/");
        }
      }
    );
  }

  get getDeviceUuid() {
    if (!this.deviceUuid) {
      runInAction(() => this.setDeviceUuid(v4()));
    }

    return this.deviceUuid!;
  }

  setFirebaseUser = (user: User | null) => {
    this.firebaseUser = user;
  };

  setServerError = (error: ApiResponse) => {
    this.serverError = error;
  };

  setDeviceUuid = (deviceUuid: string | null) => {
    this.deviceUuid = deviceUuid;
  };

  setMeestToken = (token: string | null) => {
    this.meestToken = token;
  };

  setFirebaseUuid = (uuid: string | null) => {
    this.firebaseUuid = uuid;
  };

  setFirebaseToken = (token: string | null) => {
    this.firebaseToken = token;
  };

  setAppLoaded = async (loaded: boolean) => {
    this.appLoaded = loaded;
  };

  setCurrentAuthData = (email: string, password?: string) => {
    this.currentAuthData = { email, password };
  };
  setCountryCode = (countryCode: string) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(countryCode));
  };
  toastInfo = (message: string) => {
    toast(message, this.toastInfoOptions);
  };

  toastError = (message: string) => {
    toast.error(message, this.toastErrorOptions);
  };
}
