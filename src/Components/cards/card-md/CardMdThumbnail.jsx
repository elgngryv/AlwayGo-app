import React from 'react'

const CardMdThumbnail = ({img}) => {
    console.log(img);
    
    return (
        <div>
            <img src={img} alt="" className='w-[280px] object-cover' />
        </div>
    )
}

export default CardMdThumbnail