import React, { useEffect } from 'react'
import { useState } from 'react'
import "./SignUp.css"
import { emailRegex } from '../constants';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

function SignUp() {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [confPasswd, setConfPasswd]= useState('');
    const [valid, setValid] = useState(false);
    const [logged, setLogged] = useState('');


    useEffect(() => {
        setValid(email && emailRegex.test(email) && passwd && confPasswd && passwd === confPasswd)
    })

  return (
    <div className='SignupPage'>
          <h1>Sign Up</h1>
      <input className='value'
        type="email"
        value={email}
        placeholder='Enter Email ID'
        onChange={e => setEmail(e.target.value)}
      />
      <input className='value'
        type="password"
        value={passwd}
        placeholder='Enter Password'
        onChange={e => setPasswd(e.target.value)}
      />
      <input className='value'
        type="password"
        value={confPasswd}
        placeholder='Confirm Password'
        onChange={e => setConfPasswd(e.target.value)}
      />
      <div>
        <br />
        or Simply Sign In with Google...
        <br /> <br />
        <GoogleLogin
            onSuccess={credentialResponse => {
              const decodeVal = jwt_decode(credentialResponse.credential);
              setLogged('True');
              document.write("LOGIN SUCCESSFUL");
              console.log(decodeVal);
            }}
            onError={() => {
              setLogged("False")
              document.write("LOGIN FAILED");
              console.log('Login Failed');
            }}
        />
      </div>
      
      <button disabled={!valid} className='submit' > Sign Up</button>
    </div>
  )
}

export default SignUp
