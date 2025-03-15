import React from 'react'
import DetailComments from './detail-comments';
import DetailReviewsHeader from './detail-reviews-header';
import CommentShowMoreBtn from './detail-comments/CommentShowMoreBtn';

const ProductDetailtReviews = () => {
    return (
        <div>
            <DetailReviewsHeader/>
            <DetailComments/>
            <CommentShowMoreBtn/>
        </div>
    )
}

export default ProductDetailtReviews