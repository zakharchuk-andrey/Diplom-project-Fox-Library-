import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../../styles/stylesGlobal/starRating.css';


export const RatingStars = () => {

const [rating, setRating] = React.useState(null)
const [hover, setHover] = React.useState(null)

    return (
        <>
            {[... Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <FaStar className='star' color={ratingValue <= (hover || rating ) ? '#ffdd01' : '#000000'} size={15} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
                    </label>
                    
                ) 
            })}
        </>
    );
};

