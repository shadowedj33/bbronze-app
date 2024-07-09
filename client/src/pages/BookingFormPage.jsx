import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BookingFormPage() {
    const { id } = useParams();
    const [service, setService] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [status, setStatus] = useState('pending');
    const [clientInfo, setClientInfo] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/bookings', bookingDetails);
            console.log(response.data);
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div className="flex flex-col text-center items-center mt-4">
            <h1 className="page-heading">Book an Appointment</h1>
            <form onSubmit={handleSubmit}>
                <button className="login-button" type="submit">Book Appointment</button>
            </form>
        </div>
    );
}