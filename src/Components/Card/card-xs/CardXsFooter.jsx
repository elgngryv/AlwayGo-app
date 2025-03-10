import React from 'react'
import CardXsPrice from './CardXsPrice';
import CardXsTitle from './CardXsTitle';
import CardReview from '../CardReview';

const CardXsFooter = ({ reviewsCount, starsCount, price, name }) => {
    return (
        <div className="px-10 pb-10">
            <CardReview starsCount={starsCount} reviewsCount={reviewsCount} />
            <CardXsTitle name={name} />
            <CardXsPrice price={price} />
        </div>
    )
}

export default CardXsFooter;