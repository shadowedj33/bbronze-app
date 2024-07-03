import { Outlet } from "react-router-dom";
import Header from "./Header";


export default function Layout() {
    return (
        <div className="p-4 flex flex-col min-h-screen" style={{ background: 'linear-gradient(to bottom, #83a8fc, #5c5050)' }}>
            <Header />
            <Outlet />
        </div>
    )
}