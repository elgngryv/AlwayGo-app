import React from 'react'
import CardSmThumbnail from './CardSmThumbnail';
import CardSmHeader from './CardSmHeader';
import CardSmFooter from './CardSmFooter';

const CardSm = ({ data }) => {
    const { name, img, price, reviewsCount, starsCount, id } = data;
    return (
        <div className='w-[424px] min-w-[424px] bg-[#F6F6F6] h-[588px] rounded-lg'>
            <CardSmHeader />
            <CardSmThumbnail img={img} />
            <CardSmFooter reviewsCount={reviewsCount} starsCount={starsCount} price={price} name={name} id={id}/>
        </div>
    )
}

export default CardSm