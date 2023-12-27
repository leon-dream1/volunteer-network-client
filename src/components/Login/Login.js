import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import './Login.css';
import GoogleIcon from '@mui/icons-material/Google';
import { userContext } from '../../App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyC40pgVsmIvuETXHbmsrXiwE78XXc6-S1Q",
    authDomain: "login-form-simple.firebaseapp.com",
    projectId: "login-form-simple",
    storageBucket: "login-form-simple.appspot.com",
    messagingSenderId: "248641173601",
    appId: "1:248641173601:web:17d819bf057c5a2bd59220"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

const Login = () => {
   const [newUser, setNewUser] =  useState(false);
   const [user, setUser] = useContext(userContext);
 const navigate = useNavigate();
  
   const handleGoogleSignIn = () => {
     const provider = new firebase.auth.GoogleAuthProvider();

     firebase.auth().signInWithPopup(provider)
    .then((result) => {
    // The signed-in user info.
    var googleSignInUser = result.user;
    const signInUser = {...user};
    signInUser.name = googleSignInUser.displayName;
    signInUser.email = googleSignInUser.email;
    signInUser.isLoggedIn = true;
    setUser(signInUser);
     navigate('/register')
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
}
console.log(user);

    return (
        <div>
            <Header></Header>
            <div className="login-form text-center">
                <h3>{!newUser ? 'Login With' : 'Create an account With'}</h3>
                <button className='login' onClick={handleGoogleSignIn}><GoogleIcon className='icon'></GoogleIcon>Continue with Google</button>
               {!newUser ? <p >Don't have an account?</p> : <p >Already have an account?</p>}
               <span onClick={()=> setNewUser(!newUser)} style={{textDecoration: 'underline', color: 'blue', cursor: 'pointer'}}>{!newUser?'Create an account':'Login'}</span>
            </div>
        </div>
    );
};

export default Login;