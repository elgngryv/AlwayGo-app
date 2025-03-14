import StarRating from '@/components/cards/StarRating'
import React from 'react'

const DetailRatingHeader = ({reviewsCount, ratingCount}) => {
  return (
    <div className='flex items-center'>
      <div className='text-2xl text-black mr-2'>
        Reviews ({reviewsCount})
      </div>
      <StarRating starsCount={ratingCount} md={true} />
    </div>
  )
}

export default DetailRatingHeader