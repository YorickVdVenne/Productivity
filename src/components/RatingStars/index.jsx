import React from 'react';
import { Rating } from 'react-simple-star-rating'

export default function RatingStars() {
    const [rating, setRating] = React.useState(0.0)

    const handleRating = (rate) => {
        setRating(rate)
    } 

    return (
        <Rating size={'35px'} onClick={handleRating} ratingValue={rating} showTooltip />
    );
  }