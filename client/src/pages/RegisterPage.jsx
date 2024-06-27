import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="mt-20 grow items-center justify-around">
            <div className="login-container">
                <div className="login-box">
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
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="login-button" type="button">
                            Sign In
                        </button>
                        <a className="forgot-password-link" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="create-account-link" href="#">
                            Already have an Account? <Link to={"/login"}> Sign-in Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}