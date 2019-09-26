import React from 'react' ;
import Login from  './login.component';
import SignUp from '../signup/singnup.component';
import './lon.style.scss';
const LoginPage = ()=>{
  return(
      <div className ='login'>
      <div className ='item'>
      <h1>I Have Already an Account</h1>
      <Login/>
      </div>
      <div className ='item'>
      <SignUp/>
      </div>
      </div>
  )
}

export default LoginPage;