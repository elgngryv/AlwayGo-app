import React from 'react'

const CardXsTitle = ({ name }) => {
    return (
        <div className="mb-2 mt-1">
            <a href="#" className="text-black text-base leading-5 line-clamp-2 max-w-48">
                {name}
            </a>
        </div>
    )
}

export default CardXsTitle