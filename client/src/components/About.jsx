import { Link } from "react-router-dom";
import { brennaphoto } from "../assets";

export default function About() {
    return (
        <div className="flex flex-col items-center">
            <h1 className='text-5xl font-bold font-dscript text-center mt-4 mb-2 text-lbrown'>About The Owner</h1>
            <div className="flex flex-col md:flex-row items-center py-4">
                <img src={brennaphoto} alt="brennaphoto" height={520} width={350} className="rounded-xl ml-12 mr-4" />  
                <p className="p-4 text-xl font-asap text-mbrown text-center mx-4">Personally, I have always had very sensitive skin. Burns instantly in the sun, and hates any type of chemicals. Typically, spray tans would cause me to break out in itchy hives on my neck, hips, in between elbows, etc. Most brands have harsh, unnatural additives, causing people with sensitive skin (like myself) to have a negative reaction and steer clear of fake tans forever. However, with <Link className="font-bold underline" to={'/products'}>SJOLIE</Link>, those with sensitive skin can achieve the perfect tan they have always dreamed of. </p>
            </div>
        </div>
    );
}