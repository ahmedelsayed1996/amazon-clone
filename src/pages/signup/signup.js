import React from 'react';


import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from "react-router-dom";
import { auth, db, fs } from '../../firebase';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



import { addDoc, collection, getDocs } from "firebase/firestore";

export const Signup = () => {


    const navigate = useNavigate();
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    
        const handleSignup = (e) => {


            e.preventDefault();
            console.log(fullName, email, password);

            createUserWithEmailAndPassword(auth, email, password).then(async (credentials) => {
                console.log(credentials.user.uid);
                addDoc(collection(db, "users"),{
                    fullName: fullName,
                    email: email,
                    password: password,
                    uid:credentials.user.uid,
                }).then(() => {
                    setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login');
                    setFullname('');
                    setEmail('');
                    setPassword('');
                    setErrorMsg('');
                    setTimeout(() => {
                        setSuccessMsg('');
                        navigate('/login');
                    }, 3000)
                }).catch(error => setErrorMsg(error.message));
            }).catch((error) => {
                setErrorMsg(error.message)
           
        })
    
        }  

        return (
            <div className='container'>
                <br></br>
                <br></br>
                <h1>Sign Up</h1>
                <hr></hr>
                {successMsg && <>
                    <div className='success-msg'>{successMsg}</div>
                    <br></br>
                </>}
                <form className='form-group' autoComplete="off" onSubmit={handleSignup}>
                    <label>Full Name</label>
                    <input type="text" className='form-control' required
                        onChange={(e) => setFullname(e.target.value)} value={fullName}></input>
                    <br></br>
                    <label>Email</label>
                    <input type="email" className='form-control' required
                        onChange={(e) => setEmail(e.target.value)} value={email}></input>
                    <br></br>
                    <label>Password</label>
                    <input type="password" className='form-control' required
                        onChange={(e) => setPassword(e.target.value)} value={password}></input>
                    <br></br>
                    <div className='btn-box'>
                        <span>Already have an account Login
                            <Link to="login" className='link'> Here</Link></span>
                        <button type="submit" className='btn btn-success btn-md'>SIGN UP</button>
                    </div>
                </form>
                {errorMsg && <>
                    <br></br>
                    <div className='error-msg'>{errorMsg}</div>
                </>}
            </div>
        )
    }