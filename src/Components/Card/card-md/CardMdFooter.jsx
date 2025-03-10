import React from 'react'
import arrowRight from '../../../assets/arrow-right-b.svg'


const CardMdFooter = ({price}) => {
    return (
        <div className='flex justify-between mt-8'>
            <div className='font-semibold text-black text-lg'>${price.toFixed(2)}</div>
            <a href="#" className='flex items-center'>
                <span className='text-black font-semibold mr-3 text-sm'>Buy</span>
                <img src={arrowRight} alt="Arrow" className='w-7' />
            </a>
        </div>
    )
}

export default CardMdFooter