import { FirebaseError, initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  OAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  applyActionCode,
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  updatePassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  EmailAuthProvider,
} from "firebase/auth";
import { store } from "../../stores/store";

export const enum FirebaseErrorCodes {
  auth_email_already_in_use = "auth/email-already-in-use",
  auth_user_not_found = "auth/user-not-found",
  auth_requires_recent_login = "auth/requires-recent-login",
  auth_wrong_password = "auth/wrong-password",
  auth_popup_closed_by_user = "auth/popup-closed-by-user",
}

// const firebaseConfig = {
//   apiKey: "AIzaSyBBZPByAtaTJ2sg4NBtxqyn94Y3vW1RoPc",
//   authDomain: "meestcom-810cd-3897b.firebaseapp.com",
//   projectId: "meestcom-810cd-3897b",
//   storageBucket: "meestcom-810cd-3897b.appspot.com",
//   messagingSenderId: "443429428220",
//   appId: "1:443429428220:web:66634f196b66c1b1b3b079",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBhR6__Kf7h4i1nfkcTiqFJZkSJDmFgvM4",
  authDomain: "meestcom-810cd.firebaseapp.com",
  projectId: "meestcom-810cd",
  storageBucket: "meestcom-810cd.appspot.com",
  messagingSenderId: "973051368610",
  appId: "1:973051368610:web:5c91d560cbf0f1231bb3fb",
  measurementId: "G-11DDP91YCY",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const appleProvider = new OAuthProvider("apple.com");

appleProvider.addScope("email");
appleProvider.addScope("name");

export const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.commonStore.setFirebaseUser(user);
  } else {
    // User is signed out
    store.commonStore.setFirebaseUser(null);
  }
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithApplePopup = async () => {
  return await signInWithPopup(auth, appleProvider);
};

export const signInWithGoogleRedirectAsync = async () =>
  await signInWithRedirect(auth, googleProvider);

export const signInWithAppleRedirectAsync = async () =>
  await signInWithRedirect(auth, appleProvider);

export const getRedirectResultAsync = async () => await getRedirectResult(auth);

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const sendEmailVerificationAsync = async () => {
  if (auth.currentUser) {
    await sendEmailVerification(auth.currentUser!);
  }
};

export const signInWithEmailAndPasswordAsync = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const updatePasswordForUser = async (oldPassword: string, password: string) => {
  const user = auth.currentUser;

  if (user == null) return;

  try {
    const creds = EmailAuthProvider.credential(user.email!, oldPassword);
    await reauthenticateWithCredential(user, creds);
    await updatePassword(user, password);
  } catch (error) {
    throw error;
  }
};

export const sendPasswordResetEmailAsync = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};

export const confirmPasswordResetAsync = async (oobCode: string, newPassword: string) => {
  await confirmPasswordReset(auth, oobCode, newPassword);
};

export const confirmEmailVerification = async (oobCode: string) => {
  await applyActionCode(auth, oobCode);
};

export const handleFirebaseError = (error: FirebaseError) => {
  let toastMessege = "";
  switch (error.code as FirebaseErrorCodes) {
    case FirebaseErrorCodes.auth_email_already_in_use:
      toastMessege = "Email is already in use!";
      break;
    case FirebaseErrorCodes.auth_user_not_found:
      toastMessege = "User with provided email doesn't exist!";
      break;
    case FirebaseErrorCodes.auth_requires_recent_login:
      toastMessege = "Relogin required!";
      break;
    case FirebaseErrorCodes.auth_wrong_password:
      toastMessege = "Password is incorrect!";
      break;
    case FirebaseErrorCodes.auth_popup_closed_by_user:
      toastMessege = "Sign-in pop-up was closed by user!";
      break;
    default:
      toastMessege = (error as FirebaseError).message;
  }

  store.commonStore.toastError(toastMessege);
};

export const userAuthProviderIds = (user: User | null) => {
  if (user === null) return [];

  return user.providerData.map((p) => p.providerId);
};

export const isPasswordProviderAvailableForUser = (user: User | null) => {
  return userAuthProviderIds(user).some((id) => id === "password");
};
