import React, { useState } from 'react';
import { useGoogleLogin,GoogleLogin } from '@react-oauth/google';

import { Link, useNavigate } from 'react-router-dom';
import { IoLogoLinkedin, IoLogoOctocat } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import './index.css'

function Login({ onLoginSuccess }) {
    const navigation = useNavigate()
    const responseGoogle = (response) => {
        console.log(response);
        if (response.profileObj) {
            onLoginSuccess(response);
        }
    };
    const onSuccess = (codeResponse) => {
        console.log(codeResponse) // Handle the response here
        console.log("botop")
        navigation('/user/dashboard')
        console.log("top")
        // You can perform additional actions after successful login
      };
    
      const login = useGoogleLogin({
        onSuccess,
        flow: 'implicit', // Choose the flow type (implicit or authorization code)
        // Add other configuration options if needed
      });
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')


    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = () => {
        if(email !== '' && password !== ''){
            localStorage.setItem('cred', password)
            navigation('/user/dashboard')
        }else{
            setErrorMsg("All fields must be filled")
        }
    }

    return (
        <div className='login-container'>

            <div className='left-container'>
                <div className='logo-container'>
                    <div className='logo'><h3>Logo</h3></div>
                </div>
                <h1 className='left-heading'>BASE</h1>
                <div className='contact-list-container'>
                    <ul className='contact-list'>
                        <li className='icon'><FaGithub size={35}/></li>
                        <li className='icon'><FaTwitter size={35} /></li>
                        <li className='icon'><IoLogoLinkedin size={35} /></li>
                        <li className='icon'><IoLogoOctocat size={35} /></li>
                    </ul>
                </div>
            </div>

            <div className='right-container'>
                <div className='login-form-container'>
                    <h1 className='login-heading'>Sign In</h1>
                    <p className='login-description'>Sign in to your account</p>
                    <div className='auto-container' >
                    <button onClick={() => login()} style={{backgroundColor:'white',borderRadius:5,padding:2}}>
      Sign in with Google 🚀
    </button>
   
                        {/* <GoogleLogin
                            clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        /> */}
                        {/* <GoogleLogin
                            clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        /> */}
                    </div>
                    <form className='form-container'>
                        <div className='input-fields-container'>
                            <label>Email address</label>
                            <input className='input-field' type='text' placeholder='Enter email' value={email} onChange={onChangeEmail}/>
                        </div>
                        <div className='input-fields-container'>
                            <label>Password</label>
                            <input className='input-field' type='password' value={password} onChange={onChangePassword} placeholder='Enter password' />
                        </div>
                        <Link to='/login'>Forgot Password?</Link>
                        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
                        <button className='login-button' onClick={onSubmit}>Sign In</button>
                    </form>

                    <p style={{ textAlign: 'center' }}>
                        Don't have an account? <a href='#'>Register here</a>
                    </p>


                    <div className='min-contact-list-container'>
                        <ul className='contact-list'>
                            <li className='min-icon'><FaGithub size={35} /></li>
                            <li className='min-icon'><FaTwitter size={35} /></li>
                            <li className='min-icon'><IoLogoLinkedin size={35} /></li>
                            <li className='min-icon'><IoLogoOctocat size={35} /></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;
