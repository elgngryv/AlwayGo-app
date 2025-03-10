import React from 'react'
import CardSmPrice from './CardSmPrice';
import CardSmTitle from './CardSmTitle';
import CardReview from '../CardReview';
import CardSmBuyBtn from './CardSmBuyBtn';

const CardSmFooter = ({ reviewsCount, starsCount, price, name }) => {
    return (
        <div className="px-10">
            <CardReview starsCount={starsCount} reviewsCount={reviewsCount} />
            <CardSmTitle name={name} />
            <div className='flex items-center'>
                <CardSmPrice price={price} />
                <CardSmBuyBtn />
            </div>
        </div>
    )
}

export default CardSmFooter;