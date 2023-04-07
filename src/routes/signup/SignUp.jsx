
import { useState } from 'react'
import '../signup/signup.scss'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/Firebase'

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
}

export default function SignUp() {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => { event.preventDefault();
    
    if(password !== confirmPassword) {
    alert("Your password doesn't match");
    return;
    }

    try{
        const { user } = await createAuthUserWithEmailAndPassword(
            email,
             password);
      
        await createUserDocumentFromAuth(user, { displayName});

        resetFormFields();
    } catch(error) {
        if(error.code === 'auth/email-already-in-use'){
            alert('cannot create user email already used')
        } else
        { console.log('user creation encontrted an error', error)}
        
    }
    
    };

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormFields( {...formFields, [name]: value})
    }
  return (

   

    <div className='signup'>
       
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label>Display Name</label>
            <input 
            type="text"
            required 
            onChange={handleChange}
            name='displayName'
            value={displayName}/>

            <label>Email</label>
            <input 
            type="email"
            required 
            onChange={handleChange}
            name='email'
            value={email}/>

            <label>Password</label>
            <input type="password"
            required 
            onChange={handleChange}
            name='password'
            value={password}/>

            <label>Confirm Password</label>
            <input 
            type="password"
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
            required/>

            <button type='submit'>Sign Up</button>

        </form>
    </div>
  )

  }