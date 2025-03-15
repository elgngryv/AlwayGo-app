import React from 'react'
import CommentInfo from './CommentInfo'
import CommentHeader from './CommentHeader'
import CommentContent from './CommentContent'
import CommentPhotos from './CommentPhotos'
import CommentFooter from './CommentFooter'

const DetailComment = ({data}) => {   
    return (
        <div className='flex justify-between pt-10 border-t border-[#1D1D1D]'>
            <CommentInfo createdDate={data.createdDate} firstName={data.firstName} lastName={data.lastName}/>
            <div className='max-w-[668px]'>
                <CommentHeader ratingCount={data.ratingCount}/>
                <CommentContent description={data.description}/>
                <CommentPhotos photos={data.photos}/>
                <CommentFooter likes={data.likes} dislikes={data.dislikes}/>
            </div>
        </div>
    )
}

export default DetailComment