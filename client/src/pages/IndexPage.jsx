// import Scene from "../components/canvas/Scene";

import Location from "../components/Location";

export default function IndexPage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen"> {/* Adjusted to make it a flex container centered in both axes */}
                <div className='container bg-mblue rounded-lg shadow-md shadow-lbrown flex flex-col items-center justify-normal mb-4 pb-4 mx-auto w-full max-w-4xl'> {/* Added mx-auto and max-w-4xl for responsive width */}
                    <h1 className='text-6xl font-bold font-dscript text-center mt-4 text-lbrown'>BBronze Mobile Spray Tanning</h1>
                    <p className='text-lg text-mbrown font-asap'>Premium Mobile Tanning Sevice in the North Pittsburgh area.</p>
                </div>
                <div className="container bg-mblue rounded-lg shadow-md shadow-lbrown flex flex-col items-center justify-normal mt-4 mb-4 pb-4 pt-4 mx-auto w-full max-w-4xl"> {/* Added mx-auto and max-w-4xl for responsive width */}
                    <h1 className='text-5xl font-bold font-asap text-center mt-4 mb-4 underline text-lbrown'>Location</h1>
                    <h2 className='text-2xl font-bold font-mplus text-center mt-4 mb-4 text-lbrown'>Below is the area we service. Closer location means no service fee, farther is a small fee.</h2>
                    <Location />
                </div>
            </div>
            <div> {/* Adjusted for centering and responsiveness */}
                {/* <Scene /> */}
            </div>
        </div>
    )
}