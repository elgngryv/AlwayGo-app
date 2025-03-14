import React from 'react'
import CardSmPrice from './CardSmPrice';
import CardSmTitle from './CardSmTitle';
import StarRating from '../StarRating';
import CardSmBuyBtn from './CardSmBuyBtn';

const CardSmFooter = ({ reviewsCount, starsCount, price, name, id }) => {
    return (
        <div className="px-10">
            <StarRating starsCount={starsCount} reviewsCount={reviewsCount} />
            <CardSmTitle name={name} id={id}/>
            <div className='flex items-center'>
                <CardSmPrice price={price} />
                <CardSmBuyBtn />
            </div>
        </div>
    )
}

export default CardSmFooter;