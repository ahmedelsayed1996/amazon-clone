import React from 'react';


import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { Link } from "react-router-dom";
import { auth, db, fs } from '../../firebase';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";




import { addDoc, collection, getDocs, doc, setDoc } from "@firebase/firestore";

export const Signup = () => {


    // const UserInfoModel = () => {

    //     const [username, setUsername] = useState('');
    //     const [fullNamee, setFullName] = useState(localUser?.displayName);
    //     const [isModel, setIsModel] = useState(true);
    //     const [loading, setLoading] = useState(false);
    //     const [errorMessage, setErrorMessage] = useState('');
    //     const invalid = username === '' || fullNamee === '';
    //     const handleClick = async () => {
    //         try {
    //             // setLoading(true);
    //             const usernameList = await usernameChecker(username);
    //             if (!usernameList.length) {
    //                 await updateProfile(auth.currentUser, { displayName: username.toLowerCase().trim() });
    //                 const userRef = doc(db, 'userinfo', localUser.uid);
    //                 await setDoc(userRef, { userId: localUser.uid, email: localUser.email, fullName: fullNamee.trim(), username: username.toLowerCase().trim(), follower: [], following: [], authProvider: 'Facebook or userinfoModel', dateCreated: new Date() });
    //                 setLoading(false);
    //                 setIsModel(false);
    //             } else {
    //                 setLoading(false); setErrorMessage("Username already taken"); setUsername('');
    //                 setTimeout(() => { setErrorMessage(''); }, 5000);
    //             }
    //         } catch (error) {
    //             console.log(error);
    //             setErrorMessage(error.message);
    //         }
    //     }
    // }


    const localUser = JSON.parse(localStorage.getItem('userName'));
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');




    // {-----------------------------------------------------------}
    // const [fullNamee, setFullName] = useState(localUser?.displayName);
    const [username, setUsername] = useState(localUser?.displayName);

    const user = auth.currentUser;
    const displayName = user?user.displayName:"";

    const handleSignup = (e) => {


        e.preventDefault();
        console.log(username, email, password);
        createUserWithEmailAndPassword(auth, email, password).then(async (credentials) => {
            const userRef = doc(db, 'users', credentials.user.uid);
            console.log(credentials.user.uid);
            setDoc(userRef, {
                userId: credentials.user.uid,
                email: credentials.user.email,
                username: username.toLowerCase().trim()
            })
                .then(() => {
                    setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login');
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setErrorMsg('');
                    setTimeout(() => {
                        setSuccessMsg('');
                        // navigate('/login');
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
            <h1 className={{color:'red'}}>{displayName}</h1>
            {successMsg && <>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='form-group' autoComplete="off" onSubmit={handleSignup}>
                <label>User Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setUsername(e.target.value)} value={username}></input>
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