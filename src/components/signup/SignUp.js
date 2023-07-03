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
              console.log(decodeVal);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
        />
      </div>
      
      <button disabled={!valid} className='submit' > Sign Up</button>
    </div>
  )
}

export default SignUp
