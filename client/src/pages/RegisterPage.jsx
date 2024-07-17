/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function registerUser(ev) {
        ev.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            await axios.post('/api/v1/auth/register', {
                name,
                email,
                phone,
                password,
                confirmPassword
            });
            alert('Registration Successful. You can now log in');    
        } catch (e) {
            alert('The email or phone number already exists, please log in or reset your password');
        }
        
    }

    return (
        <div className="mt-20 grow items-center justify-around">
            <div className="login-container">
                <form className="login-box" onSubmit={registerUser}>
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
                            value={name}
                            onChange={ev => setName(ev.target.value)}
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
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
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
                            value={phone}
                            onChange={ev => setPhone(ev.target.value)}
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
                            value={password}
                            onChange={ev => setPassword(ev.target.value)}
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
                            value={confirmPassword}
                            onChange={ev => setConfirmPassword(ev.target.value)}
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