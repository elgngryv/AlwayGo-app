import React from 'react';

const CommentPhotos = ({photos}) => {
    return (
        <div className='mb-8 flex gap-6'>
            {
                photos.map((photo, i) => (
                    <img src={photo} key={i} alt="" className='size-52 object-cover rounded-md' />
                ))
            }
        </div>
    )
}

export default CommentPhotos