import { bbronzelogo } from "../assets";

export default function Heading() {
    return (
        <div className="flex flex-col items-center">
            <img src={bbronzelogo} alt="bbronzelogo" className="mt-10" height={500} width={500} />
            <p className='text-lg text-mbrown font-asap px-2 py-2 mt-10 mx-16 text-center'>Welcome to BBronze Mobile Tanning! We offer flawless airbrush tanning in North Pittsburgh and surrounding areas-all from the convenience of your home. With a wide variety of clean, vegan formulas for every skin type & tone, and extensive understanding in color theory, we&apos;ll make your dream tan your reality!
            </p>
        </div>
    );
}