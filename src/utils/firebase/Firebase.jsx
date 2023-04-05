import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


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

  provider.setCustomerParameters({
    prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithPopup = () => signInWithPopup(auth, provider);
