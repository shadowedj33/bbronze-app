import { bbronzelogo } from "../assets";

export default function Heading() {
    return (
        <div className="flex flex-col items-center">
            <img src={bbronzelogo} alt="bbronzelogo" height={300} width={300} />
            <p className='text-lg text-mbrown font-asap px-2 py-2 text-center'>Welcome to BBronze Mobile Tanning! We offer flawless airbrush tanning in North Pittsburgh and surrounding areas-all from the convenience of your home. With a wide variety of clean, vegan formulas for every skin type & tone, and extensive understanding in color theory, we&apos;ll make your dream tan your reality!
            </p>
            
            <h2 className="text-4xl font-bold font-dscript text-center mt-4 text-lbrown">Why Choose BBronze?</h2>
            <p className='text-lg text-mbrown font-asap px-2 py-2 text-center'>BBronze is dedicated to providing a safe, natural-looking tan that is customized to your skin tone and desired level of darkness. We use only the highest quality, organic, and vegan solutions that are free of parabens, sulfates, and gluten. At BBronze, our goal is to make you feel comfortable and confident in your skin, so we take the time to understand your needs and preferences. Whether you&apos;re looking for a subtle glow or a deep bronze, we&apos;ll create a custom blend that enhances your natural beauty. </p>
        </div>
    );
}