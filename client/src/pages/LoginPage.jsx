import { useContext, useState } from "react";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);
    
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const {data} = await axios.post('/api/v1/auth/login', {email,password});
            setUser(data);
            alert('Login Successful');
            setRedirect(true);
        } catch (e) {
            alert('Invalid email or password');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="mt-20 grow items-center justify-around">
            <div className='login-container'>
                <form className='login-box' onSubmit={handleLoginSubmit}>
                    <h2 className='login-title'>Login</h2>
                    <div className='mb-4'>
                        <label className='login-label' htmlFor='email'>
                            Email
                        </label>
                        <input 
                            className='login-input'
                            id='email'
                            type='email'
                            placeholder='your@email.com'
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='login-label' htmlFor='password'>
                            Password
                        </label>
                        <input 
                            className='login-password-input'
                            id='password'
                            type='password'
                            placeholder='******************'
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
                        />
                        <p className='password-error'>Please enter your password.</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='login-button' type='submit'>
                            Sign In
                        </button>
                        <a className='forgot-password-link' href='#'>
                            Forgot Password?
                        </a>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='create-account-link'>
                            No account yet?  
                            <Link to={'/register'} className="font-bold font-mblue underline">Register Here</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}