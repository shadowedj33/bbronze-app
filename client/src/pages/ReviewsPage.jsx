/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RatingReview from "../components/RatingReview";
import axios from "axios";

export default function ReviewsPage() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('user-reviews').then(({data}) => {
            setReviews(data);
        });
    }, []);


    return (
        <div>
                <div className="text-center">
                    <Link className="inline-flex gap-1 py-2 bg-lbrown text-lblue font-asap px-6 rounded-full" to={'/account/reviews/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Add new Review
                    </Link>
                </div>
            my reviews
        </div>
    );
}
