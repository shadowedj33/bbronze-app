// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import service from '../server/service';
import { useNavigate } from "react-router-dom";

export default function BookingFormPage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [serviceBooking, setServiceBooking] = useState('');
    const [addOnsBooking, setAddOnsBooking] = useState('');
    const [services, setServices] = useState([]);
    const [addOns, setAddOns] = useState([]);
    const [serviceDate, setServiceDate] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await service.getServices();
                const servicesData = data.filter(item => item.category === 'Service');
                const addOnsData = data.filter(item => item.category === 'Add-on');
                setServices(servicesData);
                setAddOns(addOnsData);
            } catch (err) {
                console.error('Failed to fetch services:', err);
            }
        };

        fetchServices();
    }, []);

    async function bookService(ev) {
        ev.preventDefault();
        try {
            await axios.post('/api/v1/booking/newBooking', {
                name,
                email,
                phone,
                serviceBooking,
                addOnsBooking,
                serviceDate,
                location,
                time,

            });
            alert('Your Tan is Booked! Remember to fill out the Intake form 24 hours before your appointment.')
            navigate('/');
        } catch (err) {
            alert('Error booking tan');
        }
    }

    return (
        <div className="mt-20 grow items-center justify-center">
            <h2 className="page-title">Book your dream tan now!</h2>
            <div className="login-container">
                <form className="bg-lbrown rounded-xl border-co p-5 mt-5 justify-normal max-w-lg shadow-xl" onSubmit={bookService}>
                    <div className="shadow-sm">
                        <label className="bookingform-label" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            className="bookingform-input"
                            id="name"
                            type="text"
                            placeholder="Jane Doe"
                            value={name}
                            onChange={ev => setName(ev.target.value)}
                        />
                        <label className="bookingform-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="bookingform-input"
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={ev => setEmail(ev.target.value)}
                        />
                        <label className="bookingform-label" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="bookingform-input"
                            id="phone"
                            type="text"
                            placeholder="123-456-7890"
                            value={phone}
                            onChange={ev => setPhone(ev.target.value)}
                        />
                        <label className="bookingform-label">
                            Service
                        </label>
                        <select
                            className="bookingform-input"
                            id="service"
                            value={serviceBooking}
                            onChange={ev => setServiceBooking(ev.target.value)}
                            required
                        > 
                            {services.map((service) => (
                                <option key={service._id} value={service.name}>
                                    {service.name} - ${service.price}
                                </option>
                            ))}
                        </select>
                        <br />
                        <label className="bookingform-label">
                            Add-ons
                        </label>
                        <select
                            className="bookingform-input"
                            id="addOns"
                            value={addOnsBooking}
                            onChange={ev => setAddOnsBooking(ev.target.value)}
                        >
                            <option value="">Select Add-ons</option>
                                {addOns.map((addOn) => (
                                    <option key={addOn._id} value={addOn.name}>
                                        {addOn.name} - ${addOn.price}
                                    </option>
                                ))}
                        </select>
                        <br />
                        <label className="bookingform-label">
                            Date
                        </label>
                        <input
                            className="bookingform-input"
                            id="serviceDate"
                            type="date"
                            value={serviceDate}
                            onChange={ev => setServiceDate(ev.target.value)}
                        />
                        <label className="bookingform-label">
                            Time
                        </label>
                        <input
                            className="bookingform-input"
                            id="time"
                            type="time"
                            value={time}
                            onChange={ev => setTime(ev.target.value)}
                        />
                        <br />
                        <label className="bookingform-label">
                            Appointment Location
                        </label>
                        <input
                            className="bookingform-input"
                            id="location"
                            type="text"
                            value={location}
                            onChange={ev => setLocation(ev.target.value)}
                        />
                    </div>    
                    <button className="login-button" type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
}