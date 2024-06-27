import {Link} from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="mt-20 grow items-center justify-around">
            <div className='login-container'>
                <div className='login-box'>
                    <h2 className='login-title'>Login</h2>
                    <div className='mb-4'>
                        <label className='login-label' htmlFor='email'>
                            Email
                        </label>
                        <input className='login-input' id='username' type='email' placeholder='your@email.com' />
                    </div>
                    <div className='mb-6'>
                        <label className='login-label' htmlFor='password'>
                            Password
                        </label>
                        <input className='login-password-input' id='password' type='password' placeholder='******************' />
                        <p className='password-error'>Please enter your password.</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='login-button' type='button'>
                            Sign In
                        </button>
                        <a className='forgot-password-link' href='#'>
                            Forgot Password?
                        </a>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='create-account-link' href='#'>
                            No account yet?  
                            <Link to={'/register'} className="font-bold font-mblue underline">Register Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}