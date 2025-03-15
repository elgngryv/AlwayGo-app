import React from 'react'
import CardXsPrice from './CardXsPrice';
import CardXsTitle from './CardXsTitle';
import StarRating from '../StarRating';

const CardXsFooter = ({ reviewsCount, starsCount, price, name, id }) => {
    return (
        <div className="px-10 pb-10">
            <StarRating starsCount={starsCount} reviewsCount={reviewsCount} />
            <CardXsTitle name={name} id={id}/>
            <CardXsPrice price={price} />
        </div>
    )
}

export default CardXsFooter;