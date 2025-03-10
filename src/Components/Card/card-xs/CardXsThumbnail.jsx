import React from 'react'

const CardXsThumbnail = ({ img }) => {
    return (
        <div className="mb-[26px]">
            <img src={img} alt="" className="size-60 m-auto object-cover" />
        </div>
    )
}

export default CardXsThumbnail