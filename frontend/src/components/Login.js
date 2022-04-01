import React,{useState,useEffect} from 'react';
import "../assets/css/Login.css";
import {Link,useHistory} from "react-router-dom";
import {useStateValue} from "../Stateprovider";
import http from "../axios/http";


function Login() {
    const history=useHistory()
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[username,setUsername]=useState('');
    const[{user,handle},dispatch]=useStateValue();
    const[open,setOpen]=useState(false)

    
   
  

    const signin=(e)=>{
e.preventDefault();
http.post('/login',{email:email,password:password}).then(res=>{
    console.log(res)
})
    }

     useEffect(()=>{
if(open){
    setTimeout(()=>{
setOpen(false)
    },3000)
}},[open])
    return (
        <div className="login">
            <Link to="/">
                <img className="header__logo" id="myimg" src="https://firebasestorage.googleapis.com/v0/b/twitterclone-6c140.appspot.com/o/socialHit.jpg.jpg?alt=media&token=421646ee-5d89-4c89-8eab-57d3c88174f6"></img>
             {/* <img className="header__logo" src=""></img> */}
        </Link>
        <div className="login__container">
            <h1>sign in</h1>
            
            <form>
                {/* <h5>Username</h5>
                <input onChange={(e)=>setUsername(e.target.value)}value={username} type="text"></input> */}
                
                <h5>Email</h5>
                <input onChange={(e)=>setEmail(e.target.value)}value={email} type="text"></input>

                <h5>Password</h5>
                <input onChange={(e)=>setPassword(e.target.value)}value={password} type="password"></input>
                <button type="submit"onClick={signin} className="login__button">Sign in</button>
            </form>
            {/* <p>
                By signing-in you agree to the <strong>SocialX</strong> conditions of Use & Sale.
                Please see our Privacy Notice,our Cookies Notice and our Interest-Based Ads Notice.
            </p> */}
            <button onClick={()=>history.push('/forgotpassword')} className="login__forgotpasswordbutton">Forgot Password?</button>
            <button onClick={()=>history.push('/register')} className="login__registerButton">Create account</button>
        </div>
        {/* {open&&<div className="login__popup">
             <h1>Thanks for signing up! You can Login now!</h1>
            </div>} */}
        </div>
    )
}

export default Login
