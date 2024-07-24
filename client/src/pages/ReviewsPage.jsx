/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../features/user/userSlice";
import { getUserReviews } from "../features/review/reviewSlice";
import { showLoading } from "../features/loadSlice";


export default function ReviewsPage() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const reviews = useSelector((state) => state.user.review);
    const isLoading = useSelector((state) => state.loading ==="pending");

    useEffect(() => {
        dispatch(getUserData(user._id));
        dispatch(getUserReviews(user._id));
    }, [dispatch, user._id]);

    if (isLoading) {
        showLoading;
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
                    {reviews.map((review) => (
                        <li key={review._id}>
                            <p>Rating: {review.rating}</p>
                            <p>Comment: {review.comment}</p>
                            <p>Service: {review.service}</p>
                            <p>Service Date: {review.serviceDate}</p>
                            <p>Posted On: {review.createdAt}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
