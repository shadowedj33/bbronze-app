import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from 'antd';
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../reducers/features/userSlice";
import { showLoading } from "../reducers/features/loadSlice";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLoginSubmit = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/login', values);
            dispatch(loginSuccess(res.data));
            navigate('/account', { replace: true });
        } catch (err) {
            console.log(err);
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
                        <Button className='login-button' type="primary" htmlType="submit">
                            Sign In
                        </Button>
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