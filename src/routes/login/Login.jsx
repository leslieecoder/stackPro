
import '../login/login.scss'




const SignIn = () => {


  const logGoogleUser = async () => {
    // const {user} = await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user)
  
  }


  return (
    <div className='login'>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      
    </div>
  )
}

export default SignIn
