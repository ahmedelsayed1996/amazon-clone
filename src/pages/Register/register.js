// import React, { useState } from 'react';
// import {auth,db,createUserDocument} from '../../firebase';
// import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import './register.css';
// import { collection, addDoc } from "firebase/firestore";

// const Register = () => {
    
//     const navigate = useNavigate();
//     const [name,setName] = useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [repassword,setRepassword] = useState("");
//     const [users, setUsers] = useState([]);
// ;


//     const Registerfunc = async (e) =>{
//         e.preventDefault();

//          createUserWithEmailAndPassword(auth, email, password)
//         .then((auth) => {console.log(auth);navigate("/cards");})
//         .catch((error) => {console.log(error)})
//         console.log(auth.user.uid);

//             try {
//                 const docRef = await addDoc(collection(db, "users"), {
//                     name: name,
//                     email: email,
//                     password: password,
//                     repassword:repassword,
//                     // uid:auth.seru.uid,
//                 });
//                 console.log("Document written with ID: ", docRef.id);
//               } catch (e) {
//                 console.error("Error adding document: ", e);
//               }
       


//             // try {
//             // const {user} = createUserWithEmailAndPassword(auth, email, password)
//             // console.log(user);
//             // await createUserDocument(user, { name });


//             // // .then((auth) => {console.log(auth);navigate("/cards");})
//             // // .catch((error) => {console.log(error)})

//             // //     const docRef = await addDoc(collection(db, "users"), {
//             // //         name: name,
//             // //         email: email,
//             // //         password: password,
//             // //         repassword:repassword,
//             // //     });
//             //     // console.log("Document written with ID: ", docRef.id);
//             //   } catch (e) {
//             //     console.error("Error adding document: ", e);
//             //   }





//             // try {
//             //     const userAuth = await createUserWithEmailAndPassword(auth, email, password);
            
//             //     const docRef = await addDoc(collection(db, "users"), {
//             //                 name: name,
//             //                 email: email,
//             //                 password: password,
//             //                 repassword:repassword,
//             //             });
//             //     console.log(docRef);
//             //     // writeUserData(user)
        
//             // } catch (error) {
//             //     console.log(error.message)
//             // }





























//     //     db.collection("users")
//     //     .add({
//     //       name: name,
//     //       email: email,
//     //       password: password,
//     //       repassword:repassword,
//     //     })
//     //     .then(() => {
//     //       alert("Your message has been submitted👍");
//     //     })
//     //     .catch((error) => {
//     //       alert(error.message);
//     //     });
  
//     //   setName("");
//     //   setEmail("");
//     //   setPassword("");
//     //   setRepassword("");
      
//       }











//     //   function writeUserData(user) {
//     //     firebase.database().ref('users/' + user.uid).set(user).catch(error => {
//     //         console.log(error.message)
//     //     });
//     // }
    
//     return (
//         <>
//         <div className="login">
//       <Link to="/">
//        < img className="login-logo" src={"./امازون مصر.png"}style={{width:300,higth:150}} alt="logo-img" />
//       </Link>
//       <div className="login-container">
//       <h1> Create account</h1>
//       <div class="form">
//       <form>
//                 <label for="fn">Your name</label><br/>
//                 <input required id="fn"type="text" name=" first name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}  
//                  placeholder="first and last name"/>
//                 <br/>
//                 <label for="ln">Mobile number or email</label><br/>
//                 <input required
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}/>
//                 <br/>
//                 <label for="ps">password</label><br/>
//                 <input required 
//                        type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 Characters"/>
//                 <div>
//                 <div class="ps"> Passwords must be at least 6 characters.</div>
//                 <i class="a-icon a-icon-alert"></i>
//                 </div>
//                 <br/>
//                 <label for ="pass">Re-enter password</label> <br/>
//                 <input tabindex="1" id="pass" 
//                 type="password" name ="repeat password"
//                 value={repassword}
//                 onChange={(e) => setRepassword(e.target.value)}

//                 />
//                 <br/>
//                 <button type="submit" className='login-signInBtn' onClick={Registerfunc}>continue</button>  
               
//             </form>
//             </div>
//             <p>By creating an account, you agree to Amazon's <a href="#">Condition of Use</a> and <a href="#">privacy Notice</a></p>

//             <div class="l">
//         <p> 
//         Already have an account? <a href="./signin.html" class="icon"> Sign in</a></p>
//       </div>
//       <footer  class="k">
//    <br/>
//     <div class="link" >
//         <a href="#"> Conditions of Use </a>

//         <a href="#"> Privacy Notice </a>
//         <a href="#"> Help </a>

//     </div>
//     <p class="p">©1996–2023, Amazon.com, Inc. or its affiliates</p>
//     </footer>












//         </div>
//         </div>






//         </>
//     );
// }

// export default Register;












// // <div className="login">


// // < img classNameName="login-logo" src={"./امازون مصر.png"}style={{width:300,higth:150}} alt="logo-img" /> 
// // </div>



// // <div className="card">
// // <h1> Create account</h1>
// // <div classNameName="form">
// // <form>
// // <h1>Your name</h1>
// // <input required id="fn"type="text"name=" first name"  size="20" placeholder="first and last name"/>
// // <br/> <br/>
// // <h1>Mobile number or email</h1>
// // <input required   id="ln"type="text"/>
// // <br> <br>
// // <h1>password</h1>
// // <label for="ps">password</label><br/>
// // <input required maxlength="6" id="ln"type="password" placeholder="At least 6 Characters"/>
// // <div>
// // <div className="ps"> Passwords must be at least 6 characters.</div>
// // <i className="a-icon a-icon-alert"></i>
// // </div>
// // <br/> <br/>
// // <h1>Re-enter password</h1>
// // <input tabindex="1"   id="pass"   type="password"  name ="repeat password"/>  
// // <button type="submit" onClick={Registerfunc}>continue</button>
// // </form>
// // </div>

// // <p>By creating an account, you agree to Amazon's <a href="#">Condition of Use</a> and <a href="#">privacy Notice</a></p>

// // <div className="l">

// // <p> 
// // Already have an account? <a href="./signin.html" className="icon"> Sign in</a></p>
// // </div>
// // </div>
// // <div  className="k">
// // <br/>
// // <div className="link" >
// // <a href="#"> Conditions of Use </a>

// // <a href="#"> Privacy Notice </a>
// // <a href="#"> Help </a>

// // </div>
// // <p className="p">©1996–2023, Amazon.com, Inc. or its affiliates</p>
// // </div>
