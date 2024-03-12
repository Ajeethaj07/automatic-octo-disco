import React, { useState } from "react";
import {useNavigate} from "react-router";
import "./Login.css"

const LandingPage = () => {
    
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState('')
    const [error, setError] = useState ('')
    const [success, setSuccess] = useState ('')
    const[login, setLogin] = useState(false)
    const navigate = useNavigate();

    const handleLogin = (e) => {  
        e.preventDefault();
        const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const pwdValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        if (!email || !pwd) {
            setError('Please fill out the credentials')
            setSuccess("")
        }
        else if (!emailValidation.test(email)){
            setError('Please enter a valid email')
            setSuccess("")
        }
        else if (!pwdValidation.test(pwd)){
            setError('Your password should contain min 8 characters, atleast one lowercase, one uppercase and a number')
            setSuccess("")
        }
        else {
            setError("")
           setLogin(true);
           navigate('./table');
        }
    }
    return (
        <div className="container">
            <h2> Login </h2>
            <form onSubmit ={handleLogin}>
                <div className="input-group">
                <label>
                    Email :
                    <input type="email" value ={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password :
                    <input type="password" value ={pwd} placeholder="Enter your Password" onChange={(e) => setPwd(e.target.value)}/>
                </label>
                <br/>
                </div>
                {error && <p style={{color: 'red'}}> {error}</p>}
                {success && <p style={{color: 'green'}}> {success}</p>}
                <button className="button" type="submit">Login</button>
                
                </form>        
                </div>
    )
};
export default LandingPage;