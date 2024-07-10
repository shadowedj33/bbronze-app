/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { logosun } from "../../assets";

export default function SpinningImage() {
    const [isSpinning, setIsSpinning] = useState(false);
    
    useEffect(() => {
        setIsSpinning(true);
    }, []);
    
    return (
        <div>
            <img src={logosun} className={isSpinning ? 'spinning-image' : ''} alt="logosun" />
        </div>
    );
}