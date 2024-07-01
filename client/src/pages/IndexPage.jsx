import { bbronzelogo } from "../assets"

export default function IndexPage() {
    return (
        <div>
            <div className='flex flex-col items-center justify-normal mt-4 h-screen'>
                <img src={bbronzelogo} width={400} height={400} alt="bbronzelogo" />
                <h1 className='text-6xl font-bold text-lbrown'>Welcome to BBronze</h1>
                <p className='text-lg text-mbrown'>Premium Mobile Tanning Sevice in the North Pittsburgh area.</p>
            </div>
        </div>
    )
}