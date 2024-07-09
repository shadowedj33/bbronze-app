import { Link } from "react-router-dom";

export default function BookingPage() {
    return (
        <div className="flex flex-col text-center items-center mt-4">
            <h1 className="page-heading">Book an Appointment</h1>
            <Link to={'/booking/new'} className="login-button mt-4 max-w-md">Schedule Now</Link>
        </div>
    );
}