import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {
 fetFirestore,
 getDoc,
 setDoc,
 doc,
 getFirestore
} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDSwTMRz13znO_B1NJWi3LBIbpgQf-VOjQ",
    authDomain: "stack-pro.firebaseapp.com",
    projectId: "stack-pro",
    storageBucket: "stack-pro.appspot.com",
    messagingSenderId: "664845222564",
    appId: "1:664845222564:web:727e29517e2f33311b9c31"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid )

  

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })

      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }


  }