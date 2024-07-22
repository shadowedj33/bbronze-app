// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReviewsPage from "./ReviewsPage";
import AccountNav from "../components/AccountNav";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/features/userSlice";

export default function ProfilePage() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("User object:", user);

    let {subpage} = useParams();
    subpage = subpage || 'profile';

    if (!user.authenticated) {
        navigate('/login', { replace: true });
    }

    async function handleLogout() {
        await axios.post('/api/v1/user/logout');
        dispatch(logout());
        navigate('/login', { replace: true });
    }

    return(
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <div className="text-center font-asap max-w-lg mx-auto">
                    <ul className="">
                        <li className="text-left">Name: {user.name}</li>
                        <li className="text-left">Email: {user.email}</li>
                        <li className="text-left">Phone: {user.phone}</li>
                    </ul>
                    <button onClick={handleLogout} className="bg-dblue hover:bg-mblue text-white font-bold px-12 py-2 rounded-full focus:outline-none max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage === 'reviews' && (
                <ReviewsPage />
            )}
        </div>
    );
}