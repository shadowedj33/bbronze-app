/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function RatingReview({ rating, setRating }) {
    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                return (  
                    <span
                        key={star}
                        className='start'
                        style={{
                            cursor: 'pointer',
                            color: rating >= star ? 'gold' : 'gray',
                            fontSize: `35px`,
                        }}
                        onClick={() => {
                            setRating(star)
                        }}
                    >
                        {' '}
                        ★{' '}
                    </span>
                )
            })}
        </div>
    )
}
