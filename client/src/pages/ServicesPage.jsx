// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ServicesPage() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('services').then(response => {
            setServices(response.data);
        })
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, i) => (
                    <div key={i} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-bold">{service.name}</h2>
                        <p>{service.description}</p>
                        <p>Price: ${service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
