import { Link } from "react-router-dom";

export default function Services() {
    return (
        <div className="services-section">
            <div className="font-dscript font-bold text-lbrown text-5xl">
                Services 
            </div>
            <div className="services-containers">
                <div className="pricing-services-container">
                    <h2>Pricing & Services</h2>
                    <ul>
                        <li>1 Partial Body Spray - $35</li>
                        <li>3 Partial Body Sprays - $50</li>
                        <li>1 Full Body Spray - $65</li>
                        <li>3 Full Body Sprays - $165</li>
                    </ul>
                    <h2>Add-ons</h2>
                    <ul>
                        <li>Light Contour - $5</li>
                        <li>Intense Contour - $15</li>
                    </ul>
                    <br />
                    <Link to={'/booking'} className="login-button">Book Now</Link>
                </div>
                <div className="specials-packages-container">
                    <h2>Specials/Packages</h2>
                    <ul>
                        <li>Bridal Parties & Groups of 4+ - 20% off</li>
                        <li>Birthdays - 50% off</li>
                    </ul>
                    <br />
                    <Link to={'/booking'} className="login-button">Book Now</Link>
                </div>
            </div>
        </div>
    )
}