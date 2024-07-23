import { wordslogo } from "../assets";
import SpinningImage from "./canvas/SpinningImage";

export default function Heading() {
    return (
        <div className="flex flex-col items-center">
            <div className="relative image-container">
                <SpinningImage />
                <img src={wordslogo} alt="wordslogo" className="wordslogo-image" />
            </div>
            <p className='text-3xl font-bold text-mbrown font-asap px-2 py-2 mt-10 mx-16 text-center max-w-4xl'>Welcome to BBronze Mobile Tanning! We offer flawless airbrush tanning in North Pittsburgh and surrounding areas-all from the convenience of your home. With a wide variety of clean, vegan formulas for every skin type & tone, and extensive understanding in color theory, we&apos;ll make your dream tan your reality!
            </p>
        </div>
    );
}