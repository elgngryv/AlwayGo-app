import React from 'react'

const CommentContent = ({description}) => {
    return (
        <div className='text-base font-normal mb-6'>
            <p>A Game-Changer for My Wife's Hair Care Routine (and Our Marriage)</p>
            <br />
            <p>{description}</p>
        </div>
    )
}

export default CommentContent