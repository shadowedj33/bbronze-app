import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


export default function Layout() {
    return (
        <div className="p-4 flex flex-col min-h-screen" style={{ background: 'linear-gradient(to right, #5c5050, #83a8fc)' }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}