import { Link } from "react-router-dom";

export default function FormsPage() {
    return (
        <div className="text-center">
            <Link className="bg-lbrown text-lblue font-asap py-2 px-6 rounded-full" to={'/account/forms/update'}>
                Intake Form (for first time)
            </Link>
        </div>
    
    );
}   