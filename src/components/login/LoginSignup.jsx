import React, { useState } from 'react'
import './LoginSignup.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup =()=> {
    

    const[action,setAction]=useState("S3 Web Automation");
    const[userPassword,setPassword]=useState('');
    const[userEmail,setEmail]=useState('')

    const handleLogin = () => {
        const credentials={
            email:"admin@gmail.com",
            password:"admin123"
        }

        if (userPassword===credentials.password && userEmail===credentials.email) {
            // Redirect to the desired route after successful login
            toast.success('Login successful!', { position: toast.POSITION.TOP_RIGHT });
            setTimeout(()=>{
                window.location.href = 'https://auto-s3-bucket.onrender.com'; // Replace with your desired external URL
            }, 4000)
        }else{
            toast.error('Invalid email or password', { position: toast.POSITION.TOP_RIGHT });
        }
    };


    return (
        <div className='container'>
            <ToastContainer />
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name'/>
                </div>}
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input
                        type='email'
                        placeholder='email'
                        value={userEmail}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input
                        type='password'
                        placeholder='password'
                        value={userPassword}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className='submit-container'>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={handleLogin}>LOGIN</div>
            </div>
        </div>

    )
}

export default LoginSignup
