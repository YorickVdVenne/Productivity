import React from 'react';
import { Rating } from 'react-simple-star-rating'

export default function RatingStars({fixed, value, size}) {
    const [rating, setRating] = React.useState(value)

    const handleRating = (rate) => {
        setRating(rate)
    } 

    return (
        <>
            {fixed ?
                <Rating size={size} onClick={() => console.log('do nothing')} initialValue={rating} readonly={rating} allowHalfIcon/>
                :
                <Rating size={size} onClick={handleRating} ratingValue={rating} showTooltip />
            }
        </>
    );
  }