import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import ReviewsPage from "./ReviewsPage";
import AccountNav from "../components/AccountNav";

export default function ProfilePage() {
    const [redirect,setRedirect] = useState(null);
    const { user, ready, getUser } = useState([]);
    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/api/v1/auth/logout');
        setRedirect('/');
        getUser(null);
    }

    if (!ready) {
        return 'Loading...'
    }

    if (ready && !user) {
        return <Navigate to={'/login'} />
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return(
        <div>
            <AccountNav />
            {subpage === 'profile' && (
                <div className="text-center font-asap max-w-lg mx-auto">
                    <h2>Profile</h2>
                    <p> Logged in as {user.name}</p>
                    <p> Email: {user.email}</p><br />
                    <button onClick={logout} className="bg-dblue hover:bg-mblue text-white font-bold px-12 py-2 rounded-full focus:outline-none max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage === 'reviews' && (
                <ReviewsPage />
            )}
        </div>
    );
}