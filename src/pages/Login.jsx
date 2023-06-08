import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
// import Add from '../img/addAvatar.png'

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
     await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch(err){
      setErr(true)
    }
  };

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' autocomplete="on"/>
                <button>Sing in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>you don't  have an account? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login