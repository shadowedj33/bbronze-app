/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import ReviewsPage from "./ReviewsPage";
import AccountNav from "../components/AccountNav";

export default function AccountPage() {
    const [redirect,setRedirect] = useState(null);
    const {ready,user,setUser} = useContext(UserContext);
    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null);
    }

    if (!ready) {
        return 'Loading...'
    }

    if (ready && !user && !redirect) {
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
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="bg-dblue hover:bg-mblue text-white font-bold px-12 py-2 rounded-full focus:outline-none max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage === 'reviews' && (
                <ReviewsPage />
            )}
        </div>
    );
}