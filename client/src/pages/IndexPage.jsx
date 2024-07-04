// import Scene from "../components/canvas/Scene";

import Location from "../components/Location";

export default function IndexPage() {
    return (
        <div>
            <div className='container bg-mblue rounded-lg shadow-md shadow-lbrown flex flex-col items-center justify-normal mt-4 mb-4 pb-4 ml-10 h-full'>
                <h1 className='text-5xl font-bold font-mplus text-center mt-4 text-lbrown'>BBronze Spray Tanning</h1>
                <p className='text-lg text-mbrown font-asap'>Premium Mobile Tanning Sevice in the North Pittsburgh area.</p>
            </div>
            <div>
                {/* <Scene /> */}
                <Location />
            </div>
        </div>
    )
}