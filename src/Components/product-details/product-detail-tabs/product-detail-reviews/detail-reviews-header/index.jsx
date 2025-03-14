import React from 'react'
import DetailRatingHeader from './DetailRatingHeader';
import ShowReviewsBtn from './ShowReviewsBtn';
import WriteReviewsBtn from './WriteReviewsBtn';
import SortByDropdown from './SortByDropdown';
import DetailReviewCheckbox from './DetailReviewCheckbox';

const DetailReviewsHeader = () => {
  return (
    <div className='flex justify-between my-[52px]'>
      <DetailRatingHeader reviewsCount={99} ratingCount={4} />
      <div className='flex items-center'>
        <ShowReviewsBtn />
        <div className='mr-8'>
          <DetailReviewCheckbox text="Reviews with photo and video" />
        </div>
        <div className='mr-4'>
          <DetailReviewCheckbox text="From real buyers" />
        </div>
        <SortByDropdown />
        <WriteReviewsBtn />
      </div>
    </div>
  )
}

export default DetailReviewsHeader