import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBmJ7tnOKmvKwxlSEWgB5PF92foFCHTm1w',
  authDomain: 'capstone-project-max.firebaseapp.com',
  projectId: 'capstone-project-max',
  storageBucket: 'capstone-project-max.appspot.com',
  messagingSenderId: '792430543222',
  appId: '1:792430543222:web:93824359b10665ee9afa57',
};

const firebaseApp = initializeApp(firebaseConfig);
// Initialize Auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth(firebaseApp);
export const signInWithGoogle = () => signInWithPopup(auth, provider);
// Initialize Firestore
export const db = getFirestore(firebaseApp);

export const createUserDocFromAuth = async (authUser) => {
  // 1. Create a new user document in the users collection
  const userRef = doc(db, 'users', authUser.uid);
  console.log(userRef);

  const userSnapshot = await getDoc(userRef);

  //if user data does not exist, create it
  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error('Error creating user', error);
    }
  }
};
