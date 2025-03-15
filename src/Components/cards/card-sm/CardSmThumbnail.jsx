import React from 'react'

const CardSmThumbnail = ({ img }) => {
    return (
        <div className="mb-6">
            <img src={img} alt="" className="w-[344px] h-[360px] m-auto object-cover" />
        </div>
    )
}

export default CardSmThumbnail