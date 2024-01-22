import { makeAutoObservable, runInAction } from "mobx";
import { User } from "../models/user";
import { store } from "./store";
import agent from "../api/agent";
import {
  createAuthUserWithEmailAndPassword,
  sendEmailVerificationAsync,
  signInWithEmailAndPasswordAsync,
  sendPasswordResetEmailAsync,
  confirmPasswordResetAsync,
  confirmEmailVerification,
  signInWithGooglePopup,
  signInWithApplePopup,
  handleFirebaseError,
  updatePasswordForUser,
} from "../utils/firebase/firebase.utils";
import { FirebaseError } from "firebase/app";
import { getCountryName } from "../common/form-field-phone/form-field-phone.component";
import { AxiosError } from "axios";

export default class UserStore {
  user: User | null = null;
  isLoadingUser: boolean = false;
  googleSignInProgress: boolean = false;
  appleSignInProgress: boolean = false;
  emailSignInProgress: boolean = false;
  signUpInProgress: boolean = false;
  passwordResetProgress: boolean = false;
  emailVerificationProgress: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  getInitials = () => {
    let initials = "";

    if (this.user?.first_name && this.user?.last_name) {
      initials = this.user!.first_name.charAt(0) + this.user!.last_name.charAt(0);
    } else {
      initials = this.user!.email.slice(0, 2).toLocaleUpperCase();
    }

    return initials;
  };

  getAddress = () => {
    let address: string = "";

    if (this.user?.address?.building && this.user?.address?.building !== "")
      address += this.user!.address?.building;
    if (this.user?.address?.street && this.user?.address?.building !== "")
      address += (address !== "" ? " " : "") + this.user!.address?.street;
    if (this.user?.address?.apartment && this.user?.address?.building !== "")
      address += (address !== "" ? ", apt. " : "apt. ") + this.user!.address?.apartment;

    return address !== "" ? address : null;
  };

  getCountryName = () => {
    let countryName: string | undefined = undefined;

    if (this.user?.country) {
      countryName = getCountryName(this.user.country);
    }

    return countryName;
  };

  getUserName = (includeMiddleName: boolean = false) => {
    const fullName: (string | undefined | null)[] = [];

    if (!this.user) return "";

    fullName.push(this.user?.first_name);
    if (includeMiddleName) fullName.push(this.user?.middle_name);
    fullName.push(this.user?.last_name);

    return fullName.filter((x) => x).join(" ");
  };

  googleLogin = async () => {
    this.googleSignInProgress = true;
    try {
      const authUser = await signInWithGooglePopup();
      // await signInWithGoogleRedirectAsync();
      // const authUser = await getRedirectResultAsync();

      // if (!authUser) return;

      const firebaseToken = (authUser.user as any).accessToken;
      const firebaseUid = authUser.user.uid;
      const meestToken = await agent.Auth.socialLogin(
        firebaseUid,
        firebaseToken,
        store.commonStore.getDeviceUuid
      );

      runInAction(() => {
        store.commonStore.setMeestToken(meestToken ?? null);
        store.commonStore.setFirebaseUuid(firebaseUid ?? null);
        store.commonStore.setFirebaseToken(firebaseToken ?? null);
      });
    } catch (error) {
      handleError(error);
    } finally {
      runInAction(() => {
        this.googleSignInProgress = false;
      });
    }
  };

  appleLogin = async () => {
    this.appleSignInProgress = true;
    try {
      const authUser = await signInWithApplePopup();
      // await signInWithAppleRedirectAsync();
      // const authUser = await getRedirectResultAsync();

      // if (!authUser) return;

      const firebaseToken = (authUser.user as any).accessToken;
      const firebaseUid = authUser.user.uid;

      const meestToken = await agent.Auth.socialLogin(
        firebaseUid,
        firebaseToken,
        store.commonStore.getDeviceUuid
      );

      runInAction(() => {
        runInAction(() => {
          store.commonStore.setMeestToken(meestToken ?? null);
          store.commonStore.setFirebaseUuid(firebaseUid ?? null);
          store.commonStore.setFirebaseToken(firebaseToken ?? null);
        });
      });
    } catch (error) {
      handleError(error);
    } finally {
      runInAction(() => {
        this.appleSignInProgress = false;
      });
    }
  };

  emailLogin = async (email: string, password: string) => {
    this.emailSignInProgress = true;

    try {
      const authUser = await signInWithEmailAndPasswordAsync(email, password);

      if (!authUser.user.emailVerified) {
        throw Error(`Email ${authUser.user.email} not verified`);
      }

      const firebaseToken = (authUser.user as any).accessToken;
      const firebaseUid = authUser.user.uid;

      const meestToken = await agent.Auth.login(
        firebaseUid,
        firebaseToken,
        store.commonStore.getDeviceUuid
      );

      runInAction(() => {
        store.commonStore.setMeestToken(meestToken ?? null);
        store.commonStore.setFirebaseUuid(firebaseUid ?? null);
        store.commonStore.setFirebaseToken(firebaseToken ?? null);
      });
    } catch (error) {
      handleError(error);
    } finally {
      runInAction(() => {
        this.emailSignInProgress = false;
      });
    }
  };

  signUp = async (email: string, password: string) => {
    this.signUpInProgress = true;

    try {
      const authUser = await createAuthUserWithEmailAndPassword(email, password);
      const firebaseUid = authUser.user.uid;
      await sendEmailVerificationAsync();

      await agent.Auth.register(firebaseUid, store.commonStore.getDeviceUuid);

      store.navStore.toggleSignUpEmailSentShown();
      store.commonStore.setCurrentAuthData(email, password);
    } catch (error) {
      handleError(error);
    } finally {
      runInAction(() => {
        this.signUpInProgress = false;
      });
    }
  };

  signUpFinishEmailVerification = async (oobCode: string) => {
    this.emailVerificationProgress = true;

    try {
      await confirmEmailVerification(oobCode);
    } catch (error) {
      handleError(error);
    } finally {
      runInAction(() => {
        this.emailVerificationProgress = false;
      });
    }
  };

  // resetPassword start procedure
  resetPasswordStart = async (email: string) => {
    this.passwordResetProgress = true;

    try {
      await sendPasswordResetEmailAsync(email);

      store.navStore.togglePasswordResetFormShown();
      store.navStore.togglePasswordResetEmailSentShown();
      store.commonStore.setCurrentAuthData(email);
    } catch (error) {
      handleError(error);
    } finally {
      runInAction(() => {
        this.passwordResetProgress = false;
      });
    }
  };

  // resetPassword finalize procedure after link from firebase received
  resetPasswordFinish = async (oobCode: string, newPassword: string) => {
    this.passwordResetProgress = true;

    try {
      await confirmPasswordResetAsync(oobCode, newPassword);
    } catch (error) {
      handleError(error);
    } finally {
      runInAction(() => {
        this.passwordResetProgress = false;
      });
    }
  };

  changePassword = async (oldPassword: string, newPassword: string) => {
    this.isLoadingUser = true;

    try {
      await updatePasswordForUser(oldPassword, newPassword);
    } catch (error) {
      handleError(error);
    } finally {
      runInAction(() => {
        this.isLoadingUser = false;
      });
    }
  };

  updateContactInfo = async (email: string, phoneNumber: string, countryCode: string) => {
    try {
      const data = await agent.Profile.updateContactInfo(email, phoneNumber, countryCode);
      runInAction(() => {
        if (this.user && data) {
          this.user.email = data.email;
          this.user.phone = data.phone
            ? {
                phone_number: data.phone.phone_number,
                country_code: data.phone.country_code,
              }
            : undefined;
        }
      });
    } catch (error) {
      handleError(error);
    }
  };

  getCurrentUser = async () => {
    this.isLoadingUser = true;
    try {
      const user = await agent.Profile.profile();
      console.log(user);
      runInAction(() => {
        this.user = user!;
      });
    } catch (error) {
      if (
        store.commonStore.meestToken !== "" &&
        error instanceof AxiosError &&
        error.response?.status === 401
      ) {
        // ignore expired token error. Handled later in this catch
      } else {
        handleError(error);
      }
      // also set token to null. In such case it means that token is expired.
      store.commonStore.setMeestToken(null);
      store.commonStore.setDeviceUuid(null);
      store.commonStore.setFirebaseToken(null);
      store.commonStore.setFirebaseUuid(null);
    } finally {
      runInAction(() => {
        this.isLoadingUser = false;
      });
    }
  };

  logout = async (isDeleted = false) => {
    store.commonStore.appLoaded = false;
    try {
      await agent.Auth.logout();
    } catch (error) {
      if (!isDeleted) {
        handleError(error);
      }
    } finally {
      runInAction(() => {
        store.commonStore.setMeestToken(null);
        store.commonStore.setDeviceUuid(null);
        store.commonStore.setFirebaseToken(null);
        store.commonStore.setFirebaseUuid(null);
        store.commonStore.appLoaded = true;
      });
    }
  };
}

export function handleError(error: any) {
  console.error(error);

  if (
    store.commonStore.meestToken !== "" &&
    error instanceof AxiosError &&
    error.response?.status === 401
  ) {
    store.commonStore.setMeestToken(null);
    store.commonStore.setDeviceUuid(null);
    store.commonStore.setFirebaseToken(null);
    store.commonStore.setFirebaseUuid(null);
  } else if (error instanceof AxiosError && error.response?.status !== 500) {
    store.commonStore.toastError(error.response?.data.message);
  } else if (error instanceof FirebaseError) {
    handleFirebaseError(error);
  } else {
    store.commonStore.toastError(error as string);
  }
}
