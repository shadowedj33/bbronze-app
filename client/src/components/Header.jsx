import { Link } from "react-router-dom";
import { bbronzelogo } from "../assets";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
    const {user} = useContext(UserContext);
    return(
        <div>
            <header className='flex justify-between items-center font-mplus'>
                <div className='flex justify-center'>
                    <Link to={'/'} className="flex items-center gap-1">
                        <img src={bbronzelogo} width={100} height={20} alt="bbronzelogo" className="justify-between items-center ml-3 mb-1" />
                    </Link>
                </div>
                <div className='flex gap-2 font-bold border border-gray-400 rounded-full py-2 px-4 shadow-md shadow-lbrown'>
                    <div>About</div>
                    <div className='border-l border-lbrown'></div>
                    <div>Services</div>
                    <div className='border-l border-lbrown'></div>
                    <div>Location</div>
                    <div className='border-l border-lbrown'></div>
                    <div>Product Info</div>
                    <div className='border-l border-lbrown'></div>
                    <button className='flex bg-dblue text-gray-200 rounded-full border border-dblue'>
                        Book Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                    </button>
                </div>
                <Link to={user?'/account':'/login'} className='flex items-center gap-2 font-bold border border-gray-400 rounded-full py-2 px-4 shadow-md shadow-lbrown'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <div className='bg-lbrown text-white rounded-full border border-gray-500 overflow-hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 relative top-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    {!!user && (
                        <div>
                            {user.name}
                        </div>
                    )}
                </Link>
            </header>
        </div>
    )
}