import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import config from "../config";

export default function RegisterPage() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const {dispatch} = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}))
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${config.VITE_BASE_URL}/register`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.message);
            }

            dispatch({ type: 'REGISTER_SUCCESS' });
            navigate('/login');

        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="mt-20 grow items-center justify-around">
            <div className="login-container">
                <form className="login-box" onSubmit={handleClick}>
                    <h2 className="login-title">Register</h2>
                    <div className="mb-4">
                        <label className="login-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="login-input"
                            id="name"
                            type="text"
                            placeholder="Jane Doe"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="login-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="login-input"
                            id="email"
                            type="email"
                            placeholder="jane@example.com"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="login-label" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="login-input"
                            id="phone"
                            type="tel"
                            placeholder="123-456-7890"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="login-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="login-password-input"
                            id="password"
                            type="password"
                            placeholder="******************"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="login-label" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            className="login-password-input"
                            id="confirmPassword"
                            type="password"
                            placeholder="******************"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="login-button" type="submit">
                            Register
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="create-account-link" href="#">
                            Already have an Account? <Link to={"/login"}> Sign-in Here</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}