import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithPhoneNumber,
  ApplicationVerifier,
} from "@firebase/auth";


export const auth = getAuth();
auth.languageCode = 'en';

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredentials = await signInWithPopup(auth, provider);
      return {
        user: userCredentials.user,
      };
    } catch (error: any) {
      throw error.message;
    }
  },
  loginWithPhone: async (phoneNumber: string, appVerifier: ApplicationVerifier) => {
    try {
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      return result;
    } catch (error: any) {
      throw error.message;
    }
    
  },
  logout: async () => {
    await signOut(auth);
  },
};
