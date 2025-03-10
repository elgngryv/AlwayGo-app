import React from 'react'

const CardSmTitle = ({ name }) => {
    return (
        <div className="mb-4 mt-1">
            <a href="#" className="text-black text-2xl line-clamp-2 max-w-80">
                {name}
            </a>
        </div>
    )
}

export default CardSmTitle