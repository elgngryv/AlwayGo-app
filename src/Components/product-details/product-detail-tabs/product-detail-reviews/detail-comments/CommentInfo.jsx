import React from 'react'

const CommentInfo = ({firstName, lastName, createdDate}) => {
    return (
        <div className='text-base font-medium'>
            <h4 className='text-black mb-2'>{firstName +' '+ lastName}</h4>
            <span className='text-[#909090]'>{createdDate}</span>
        </div>
    )
}

export default CommentInfo