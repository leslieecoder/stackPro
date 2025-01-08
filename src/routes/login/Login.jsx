

import '../login/login.scss'

// import { 
//   signInWithGooglePopup, 
// } from '../../utils/firebase/Firebase'




const SignIn = () => {


  const logGoogleUser = async () => {
    // const {user} = await signInWithGooglePopup();
  
  
  }


  return (
    <div className='login'>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      
    </div>
  )
}

export default SignIn
