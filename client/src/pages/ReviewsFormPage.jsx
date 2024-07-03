/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import RatingReview from "../components/RatingReview";
import axios from "axios";

export default function ReviewsFormPage() {
    const { id } = useParams();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [reviewPhotos, setReviewPhotos] = useState([]);
    const [serviceDate, setServiceDate] = useState('');
    const [service, setService] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/reviews/'+id).then(response => {
            const {data} = response;
            setRating(data.rating);
            setComment(data.comment);
            setReviewPhotos(data.reviewPhotos);
            setServiceDate(data.serviceDate);
            setService(data.service);
        });
    }, [id]);

    function handleClick() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.multiple = true;
        fileInput.onchange = (e) => {
            console.log(e.target.files);
        };
        fileInput.click();
    }
    
    async function saveReview(ev) {
        ev.preventDefault();
        const reviewData = {
            rating,
            comment,
            reviewPhotos,
            serviceDate,
            service,
        };
        if (id) {
            await axios.put('/reviews', {
                id,
                ...reviewData
            });
            setRedirect(true);
        } else {
            await axios.post('/reviews', reviewData);
            setRedirect(true);
        }

    }

    if (redirect) {
        return <Navigate to={'/account/reviews'} />
    }

    return (
        <div className="text-center">
            <form onSubmit={saveReview}>
                <div>
                    <label className="font-asap text-xl mt-4 font-bold">Rating</label>
                    <RatingReview rating={rating} setRating={setRating} value={rating} onChange={ev => setRating(ev.target.value)} />
                </div>
                <div className="inline-block">
                    <label className="font-asap text-xl mt-4 font-bold">Comments</label>
                    <textarea className="bg-mblue rounded-full text-mbrown mx-2 my-2" value={comment} onChange={ev => setComment(ev.target.value)} required />
                </div>
                <div className="mt-2">
                    <label className="font-asap text-xl font-bold">Photos</label>
                    <button className="bg-lbrown rounded-full text-center text-lblue mx-2 my-2 px-5 translate-y-2 text-2xl" value={reviewPhotos} onChange={ev => setReviewPhotos(ev.target.value)} onClick={handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>
                </div>
                <div className="mt-4">
                    <label className="font-asap text-xl font-bold">Service Date</label>
                    <input className="bg-lbrown rounded-full text-lblue px-2 mx-2 my-2" type="date" value={serviceDate} onChange={ev => setServiceDate(ev.target.value)} required />
                </div>
                <div className="mt-4">
                    <label className="font-asap text-xl font-bold">Service</label>
                    <select className="bg-lbrown rounded-full text-lblue px-2 mx-2 my-2" value={service} onChange={ev => setService(ev.target.value)} required>
                        <option value="1">Partial Body Spray</option>
                        <option value="2">Full Body Spray</option>
                        <option value="3">Contouring</option>
                    </select>
                </div>
                <div className="mt-4">
                    <button className="bg-dblue rounded-full text-lblue mx-2 my-2 px-4 py-2 font-bold text-xl font-mplus" type="submit">Post Review</button>
                </div>
            </form>
        </div>
    );
}