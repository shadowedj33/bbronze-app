import { Link } from "react-router-dom";

export default function ReviewsPage() {
    return (
        <div className="text-center">
            <Link className="bg-lbrown text-lblue font-asap py-2 px-6 rounded-full" to={'/account/reviews/new'}>
                Add new Review
            </Link>
        </div>
    
    );
}   