/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import service from '../server/service';

export default function ServicesPage() {
    const [services, setServices] = useState([]);
    const [addOns, setAddOns] = useState([]);

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

    return (
        <div className='services-section'>
            <h1 className="page-title">Services</h1>
            <ul className=''>
                {services.map((service, index) => (
                    <li className='pricing-services-container' key={index}>
                        <h2 className='font-bold font-mplus text-lbrown'>{service.name}</h2>
                        <p className='font-asap text-lbrown'>{service.description}</p>
                        <p className='font-asap text-lbrown'>Processing Time: {service.processingTime}</p>
                        <p className='font-asap text-lbrown'>${service.price}</p>
                    </li>
                ))}
            </ul>
            <h2 className='page-title'>Add-Ons</h2>
            <ul className='pricing-services-container'>
                {addOns.map((addOn, index) => (
                    <li key={index}>
                        <h2 className='font-bold font-mplus text-mblue'>{addOn.name}</h2>
                        <p className='font-asap text-lbrown'>{addOn.description}</p>
                        <p className='font-asap text-lbrown'>Add-on Time: {addOn.processingTime}</p>
                        <p className='font-asap text-lbrown'>${addOn.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
