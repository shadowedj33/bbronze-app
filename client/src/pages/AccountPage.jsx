import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

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

    function linkClasses (type=null) {
        let classes = 'py-2 px-6';
        if (type === subpage) {
            classes += ' bg-dblue text-gray-200 rounded-full';
        }
        return classes;
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }

    return(
        <div>
            <nav className="w-full flex justify-center mt-2 mb-6 gap-4">
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
                <Link className={linkClasses('profile')} to={'/account/profile'}>My Profile</Link>
                <Link className={linkClasses('forms')} to={'/account/forms'}>Intake Forms</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center font-asap max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})<br />
                    <button onClick={logout} className="bg-dblue hover:bg-mblue text-white font-bold px-12 py-2 rounded-full focus:outline-none max-w-sm mt-2">Logout</button>
                </div>
            )}
        </div>
    );
}