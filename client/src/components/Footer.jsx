import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    © <Link to={'https://digendeavors.com'} rel="noreferrer" target="_blank">Digital Endeavors</Link> LLC {new Date().getFullYear()}. All rights
                    reserved.
                </p>
            </div>    
        </div>
    );
}