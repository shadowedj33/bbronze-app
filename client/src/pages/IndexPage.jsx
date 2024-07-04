// import Scene from "../components/canvas/Scene";

import Location from "../components/Location";
import Products from "../components/Products";
import Services from "../components/Services";


export default function IndexPage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className='index-container'>
                    <h1 className='text-6xl font-bold font-dscript text-center mt-4 text-lbrown'>BBronze Mobile Spray Tanning</h1>
                    <p className='text-lg text-mbrown font-asap'>Premium Mobile Tanning Sevice in the North Pittsburgh area.</p>
                </div>
                <div className="index-container">
                    <Services />
                </div>
                <div className="index-container">
                    <Products />
                </div>
                <div className="index-container">
                    <h1 className='text-6xl font-bold font-dscript text-center mt-4 mb-2 text-lbrown'>Location</h1>
                    <h2 className='text-2xl font-bold font-mplus text-center mt-4 mb-4 text-lbrown'>Below is the area we service. Closer location means no service fee, farther is a small fee.</h2>
                    <Location />
                </div>
            </div>
            <div>
                {/* <Scene /> */}
            </div>
        </div>
    )
}