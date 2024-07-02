/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import RatingReview from "../components/RatingReview";

export default function ReviewsPage() {
    const { action } = useParams();
    const [rating, setRating] = useState(0);

    function handleClick() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.multiple = true;
        fileInput.onchange = (e) => {
            console.log(e.target.files);
        };
        fileInput.click();
    }

    return (
        <div>
            {action !== 'new' && (
                <div className="text-center">
                    <Link className="inline-flex gap-1 py-2 bg-lbrown text-lblue font-asap px-6 rounded-full" to={'/account/reviews/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Add new Review
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div className="text-center">
                    <form>
                        <div>
                            <label className="font-asap text-xl mt-4 font-bold">Rating</label>
                            <RatingReview rating={rating} setRating={setRating} />
                        </div>
                        <div className="inline-block">
                            <label className="font-asap text-xl mt-4 font-bold">Comments</label>
                            <textarea className="bg-mblue rounded-full text-mbrown mx-2 my-2" id="comment" name="comment" required />
                        </div>
                        <div className="mt-4">
                            <label className="font-asap text-xl mt-4 font-bold">Photos</label>
                            <button className="bg-lbrown rounded-full text-center text-lblue mx-2 my-2 px-10 text-2xl"  onClick={handleClick}>
                                +
                            </button>
                        </div>
                        <div className="mt-4">
                            <label className="font-asap text-xl font-bold">Service Date</label>
                            <input className="bg-lbrown rounded-full text-lblue px-2 mx-2 my-2" type="date" id="serviceDate" name="serviceDate" required />
                        </div>
                        <div className="mt-4">
                            <label className="font-asap text-xl font-bold">Service</label>
                            <select className="bg-lbrown rounded-full text-lblue" id="service" name="service" required>
                                <option value="1">Partial Body Spray</option>
                                <option value="2">Full Body Spray</option>
                                <option value="3">Contouring</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <button className="bg-lbrown rounded-full text-lblue mx-2 my-2 px-4 py-2 font-bold text-xl font-mplus" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )}
            my reviews
        </div>
    );
}
