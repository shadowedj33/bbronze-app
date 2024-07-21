import {Link, useNavigate} from "react-router-dom";
import { Form, Input, message } from 'antd';
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from '../reducers/features/loadSlice';
import { loginSuccess } from "../reducers/features/userSlice";

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleLoginSubmit = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post("/api/v1/user/login", values);
            dispatch(hideLoading());
            if (res.data.success) {
                localStorage.setItem("token", res.data.token);
                dispatch(loginSuccess(res.data.user));
                message.success("Login successful");
                navigate("/account");
            } else {
                message.error(res.data.message);
            }
        } catch (err) {
            dispatch(hideLoading());
            console.log(err);
            message.error('Something went wrong');
        }
    };
    return (
        <div className="mt-20 grow items-center justify-around">
            <div className='login-container'>
                <Form className='login-box' onFinish={handleLoginSubmit}>
                    <h2 className='login-title'>Login</h2>
                    <div className='mb-4'>
                        <Form.Item className='login-label' id='email' label='Email' name='email'>
                            <Input type="email" autoComplete="email" required />
                        </Form.Item>
                    </div>
                    <div className='mb-6'>
                        <Form.Item className='login-label' label='Password' name='password'>
                            <Input type="password" autoComplete="password" required/>
                        </Form.Item>
                        <p className='password-error'>Please enter your password.</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='login-button' type="submit">
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
                </Form>
            </div>
        </div>
    );
}