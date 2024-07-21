import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import ReviewsPage from "./ReviewsPage";
import AccountNav from "../components/AccountNav";

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await axios.get(
                    '/api/v1/user/getUserData',
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token"),
                        },
                    }
                );
                if (res.data.success) {
                    setUser(res.data.data);
                    setLoading(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };
        getUserData();
    }, []);

    async function logout() {
        await axios.post('/api/v1/auth/logout');
        localStorage.removeItem("token");
        setUser(null);
    }

    if (loading) {
        return 'Loading...'
    }

    if (!user) {
        return <Navigate to={'/login'} />
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