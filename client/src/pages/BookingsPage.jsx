import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";

export default function BookingsPage() {
    return (
        <div>
            <AccountNav />
            <div className="text-center">
                <Link className="inline-flex gap-1 py-2 bg-lbrown text-lblue font-asap px-6 rounded-full" to={'/booking/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Add new Booking
                </Link>
            </div>
            my bookings
        </div>
    );
}