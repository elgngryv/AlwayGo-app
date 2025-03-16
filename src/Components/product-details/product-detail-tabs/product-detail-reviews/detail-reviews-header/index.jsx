import React from 'react'
import DetailRatingHeader from './DetailRatingHeader';
import ShowReviewsBtn from './ShowReviewsBtn';
import WriteReviewsBtn from './WriteReviewsBtn';
import Dropdown from '../../../../ui/Dropdown';
import DetailReviewCheckbox from './DetailReviewCheckbox';

const DetailReviewsHeader = () => {
  const dropdowns = {
    sortBy: {
      name: 'Sort by',
      btnClasses: 'hover:bg-white font-normal',
      options: [
        'All stars',
        '5 stars',
        '4 stars',
        '3 stars',
        '2 stars',
        '1 stars',
        'Only positive',
        'Only negative'
      ]
    }
  }
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
        <div className='mr-[38px]'>
          <Dropdown data={dropdowns.sortBy}/>
        </div>
        <WriteReviewsBtn />
      </div>
    </div>
  )
}

export default DetailReviewsHeader