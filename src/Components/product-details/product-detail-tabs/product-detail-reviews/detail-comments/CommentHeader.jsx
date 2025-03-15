import StarRating from '@/components/cards/StarRating'
import React from 'react'

const CommentHeader = ({ratingCount}) => {    
    return (
        <div className='mb-6 flex justify-between items-center'>
            <StarRating starsCount={ratingCount} md={true} />
            <div>
                <a href='#' className='text-base font-normal text-[#909090]'>
                    Сomplain
                </a>
            </div>
        </div>
    )
}

export default CommentHeader