import React from 'react'
import arrowRight from '../../../assets/arrow-right-b.svg'

const CardSmBuyBtn = () => {
    return (
        <a href='#' className='flex items-center ml-auto'>
            <span className='text-sm text-black mr-2 font-semibold'>Buy</span>
            <img src={arrowRight} alt="Arrow" className='w-7'/>
        </a>
    )
}

export default CardSmBuyBtn