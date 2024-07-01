import { bbronzelogo } from "../assets"

export default function IndexPage() {
    return (
        <div>
            <div className='flex flex-col items-center justify-normal mt-4 h-screen'>
                <img src={bbronzelogo} width={200} height={200} alt="bbronzelogo" />
                <h1 className='text-6xl font-bold'>Welcome to BBronze</h1>
                <p className='text-lg'>Premium Mobile Tanning Sevice in the North Pittsburgh area.</p>
            </div>
        </div>
    )
}