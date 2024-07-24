/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { useDispatch, useSelector } from "react-redux";
import { getUserReviews } from "../features/review/reviewSlice";
import { showLoading } from "../features/loadSlice";


export default function ReviewsPage() {
    const dispatch = useDispatch();
    const { reviews, isLoading } = useSelector((state) => state.review);
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (user && user._id) {
            dispatch(getUserReviews(user._id));
        }
    }, [dispatch, user]);

    if (isLoading) {
        return <p>Loading reviews...</p>;
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
                <h2>My Reviews</h2>
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review._id}>
                            <p>Rating: {review.rating}</p>
                            <p>Comment: {review.comment}</p>
                            <p>Service: {review.service}</p>
                            <p>Service Date: {review.serviceDate}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews found.</p>
                )}
            </div>
        </div>
    );
}
