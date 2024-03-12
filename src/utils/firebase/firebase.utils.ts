import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  // eslint-disable-next-line no-unused-vars
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  NextOrObserver,
  User,
} from 'firebase/auth';
// import 'firebase/dynamic-links';
// import { dynamicLinks } from 'firebase/dynamic-links';

const firebaseConfig = {
  apiKey: "AIzaSyBswKfugyslPABkfL2cEmAI0GKqZ8BwFwE",
  authDomain: "scissors-e5deb.firebaseapp.com",
  projectId: "scissors-e5deb",
  storageBucket: "scissors-e5deb.appspot.com",
  messagingSenderId: "503017755543",
  appId: "1:503017755543:web:ef20b6df814e9c0a302ad2"
};

const fireabaseApp = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(fireabaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  users: { uid?: any; displayName?: any; email?: any },
  additionalInformation = {}
) => {
  if (!users) return;

  const userDocRef = doc(db, 'users', users.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = users;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('An error occured', error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUserOut = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};
