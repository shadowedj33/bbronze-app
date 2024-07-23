/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { useDispatch, useSelector } from "react-redux";
import { getUserReviews } from "../reducers/features/reviewSlice";


export default function ReviewsPage() {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.review.reviews);
    const status = useSelector((state) => state.review.status);
    const error = useSelector((state) => state.review.error);

    useEffect(() => {
        dispatch(getUserReviews());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <AccountNav />
            <div className="text-center">
                <Link className="inline-flex gap-1 py-2 bg-lbrown text-lblue font-asap px-6 rounded-full" to={'/account/reviews/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Add new Review
                </Link>
            </div>
            <div>
                <h2 className="">My Reviews</h2>
                <ul>
                    <li key={reviews.id}>
                        <p>Rating: {reviews.rating}</p>
                        <p>Comment: {reviews.comment}</p>
                        <p>Service: {reviews.service}</p>
                        <p>Service Date: {reviews.serviceDate}</p>
                        <p>Posted On: {reviews.createdAt}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
