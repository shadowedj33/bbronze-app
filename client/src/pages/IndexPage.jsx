import Scene from "../components/canvas/Scene";

export default function IndexPage() {
    return (
        <div>
            <div className='flex flex-col items-center justify-normal mt-4 h-screen'>
                <h1 className='text-5xl font-bold font-mplus text-center mt-4 text-lbrown'>BBronze Spray Tanning</h1>
                <p className='text-lg text-mbrown font-asap'>Premium Mobile Tanning Sevice in the North Pittsburgh area.</p>
            </div>
            <div>
                <Scene />
            </div>
        </div>
    )
}